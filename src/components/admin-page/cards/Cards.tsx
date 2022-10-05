import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCardsByCategoryId } from '../../../api/cards';
import { Card as CardType, Cards as CardsType } from '../../../types/common';
import Card from '../card/Card';
import NewCard from '../new-card/NewCard';
import styles from './cards.module.css';

function Cards() {
  const [cards, setCards] = useState<CardsType>([]);
  const [rerender, setRerender] = useState(0);

  const params = useParams();
  const categoryId = params.categoryId as string;

  useEffect(() => {
    getCardsByCategoryId(Number(categoryId)).then((cards: CardsType) => {
      setCards(cards);
    });
  }, [categoryId, rerender]);

  return (
    <ul className={styles.list}>
      {cards?.map((card: CardType) => (
        <li key={card.id} className={styles.item}>
          <Card setRerender={setRerender} card={card} />
        </li>
      ))}
      <li className={styles.item}>
        <NewCard categoryId={Number(categoryId)} setRerender={setRerender} />
      </li>
    </ul>
  );
}

export default Cards;
