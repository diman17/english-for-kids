import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setCurrentCards, startGame } from '../../../store/slices/game';
import { AppDispatch, RootState } from '../../../store/store';
import { Card as CardType } from '../../../types/common';
import { playAudio, shuffle } from '../../../utils/common';
import Card from '../card/Card';
import ResultScreen from '../result-screen/ResultScreen';
import Stars from '../stars/Stars';
import styles from './cards.module.css';
import repeatIcon from '../../../assets/icons/repeat.svg';
import { fetchCardsByCategoryId } from '../../../store/slices/cards';
import Loader from '../../../UI/loader/Loader';

function Cards() {
  const params = useParams();
  const categoryId = Number(params.categoryId);

  const dispatch = useDispatch<AppDispatch>();

  const { cardsByCategoryId, isLoading } = useSelector(
    (state: RootState) => state.cards,
  );
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
    dispatch(fetchCardsByCategoryId(categoryId)).then(({ payload }) => {
      dispatch(setCurrentCards(shuffle(payload)));
    });
  }, [categoryId]);

  useEffect(() => {
    dispatch(setCurrentCards(shuffle(cardsByCategoryId)));
  }, [isPlayMode]);

  useEffect(() => {
    if (currentCardIndex !== 0) {
      playAudio(currentCards[currentCardIndex].audio, 800);
    }
  }, [currentCardIndex]);

  const handleButton = () => {
    if (!isGameStart) {
      dispatch(startGame());
      playAudio(currentCards[currentCardIndex].audio);
    }
    playAudio(currentCards[currentCardIndex].audio);
  };

  if (isResultScreenShown) {
    return <ResultScreen />;
  }

  if (isLoading) {
    return <Loader />;
  }

  if (!cardsByCategoryId.length) {
    return (
      <p className={styles.text}>There are no words in this category yet</p>
    );
  }

  return (
    <>
      {isPlayMode ? <Stars /> : ''}
      <ul className={styles.list}>
        {cardsByCategoryId?.map((card: CardType) => (
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
