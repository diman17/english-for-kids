import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCardsByCategoryId } from '../../../api/cards';
import { setCurrentCards, startGame } from '../../../store/slices/game';
import { RootState } from '../../../store/store';
import { Card as CardType, Cards as CardsType } from '../../../types/common';
import { playAudio, shuffle } from '../../../utils/common';
import Card from '../card/Card';
import ResultScreen from '../result-screen/ResultScreen';
import Stars from '../stars/Stars';
import styles from './cards.module.css';
import repeatIcon from '../../../assets/icons/repeat.svg';

function Cards() {
  const params = useParams();
  const categoryId = params.categoryId as string;

  const [cards, setCards] = useState<CardsType>([]);

  const dispatch = useDispatch();
  const isPlayMode = useSelector((state: RootState) => state.common.isPlayMode);
  const isGameStart = useSelector((state: RootState) => state.game.isGameStart);
  const currentCardIndex = useSelector(
    (state: RootState) => state.game.currentCardIndex,
  );
  const currentCards = useSelector(
    (state: RootState) => state.game.currentCards,
  );
  const isResultScreenShown = useSelector(
    (state: RootState) => state.game.isResultScreenShown,
  );

  useEffect(() => {
    getCardsByCategoryId(Number(categoryId)).then((cards: CardsType) => {
      setCards(cards);
      dispatch(setCurrentCards(shuffle(cards)));
    });
  }, [categoryId, isPlayMode]);

  useEffect(() => {
    if (currentCardIndex !== 0) {
      playAudio(currentCards[currentCardIndex].audio, 800);
    }
  }, [currentCardIndex]);

  if (isResultScreenShown) {
    return <ResultScreen />;
  }

  const handleButton = () => {
    if (!isGameStart) {
      dispatch(startGame());
      playAudio(currentCards[currentCardIndex].audio);
    }
    playAudio(currentCards[currentCardIndex].audio);
  };

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
      {isPlayMode ? (
        <button onClick={handleButton} className={styles.button} type="button">
          {isGameStart ? <img src={repeatIcon} alt="repeat" /> : 'play'}
        </button>
      ) : (
        ''
      )}
    </>
  );
}

export default Cards;
