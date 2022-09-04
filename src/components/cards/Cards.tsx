import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import getCardsByCategoryId from '../../api/cards';
import { RootState } from '../../store/store';
import { Card as CardType, Cards as CardsType } from '../../types/common';
import GameButton from '../../UI/buttons/game-button/GameButton';
import Card from '../card/Card';
import styles from './cards.module.css';

function Cards() {
  const params = useParams();
  const categoryId = params.categoryId as string;
  const [cards, setCards] = useState<CardsType>();
  const isPlayMode = useSelector((state: RootState) => state.common.isPlayMode);

  useEffect(() => {
    getCardsByCategoryId(Number(categoryId)).then((cards) => setCards(cards));
  }, [categoryId]);

  return (
    <>
      <ul className={styles.list}>
        {cards?.map((card: CardType) => (
          <li key={card.id} className={styles.item}>
            <Card card={card} />
          </li>
        ))}
      </ul>
      {isPlayMode ? <GameButton /> : ''}
    </>
  );
}

export default Cards;
