import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import getCardsByCategoryId from '../../api/cards';
import { setCurrentCards } from '../../store/slices/game';
import { RootState } from '../../store/store';
import { Card as CardType, Cards as CardsType } from '../../types/common';
import GameButton from '../../UI/buttons/game-button/GameButton';
import { playAudio, shuffle } from '../../utils/common';
import Card from '../card/Card';
import Stars from '../stars/Stars';
import styles from './cards.module.css';

function Cards() {
  const params = useParams();
  const dispatch = useDispatch();
  const categoryId = params.categoryId as string;
  const [cards, setCards] = useState<CardsType>([]);
  const isPlayMode = useSelector((state: RootState) => state.common.isPlayMode);
  const currentCardIndex = useSelector(
    (state: RootState) => state.game.currentCardIndex,
  );
  const currentCards = useSelector(
    (state: RootState) => state.game.currentCards,
  );

  useEffect(() => {
    getCardsByCategoryId(Number(categoryId)).then((cards: CardsType) => {
      setCards(cards);
      dispatch(setCurrentCards(shuffle(cards)));
    });
  }, [categoryId, isPlayMode]);

  useEffect(() => {
    if (currentCardIndex !== 0) {
      playAudio(
        `data:audio/mp3;base64,${currentCards[currentCardIndex].audio}`,
        800,
      );
    }
  }, [currentCardIndex]);

  return (
    <>
      {isPlayMode ? <Stars /> : ''}
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
