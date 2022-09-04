import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getCardsByCategoryId from '../../api/cards';
import { Card as CardType, Cards as CardsType } from '../../types/main';
import Card from '../card/Card';
import styles from './cards.module.css';

function Cards() {
  const params = useParams();
  const categoryId = params.categoryId as string;
  const [cards, setCards] = useState<CardsType>();

  useEffect(() => {
    getCardsByCategoryId(Number(categoryId)).then((cards) => setCards(cards));
  }, [categoryId]);

  return (
    <ul className={styles.list}>
      {cards?.map((card: CardType) => (
        <li key={card.id} className={styles.item}>
          <Card card={card} />
        </li>
      ))}
    </ul>
  );
}

export default Cards;
