import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGame } from '../../../store/slices/game';
import { RootState } from '../../../store/store';
import styles from './game-button.module.css';
import repeatIcon from '../../../assets/icons/repeat.svg';
import { playAudio } from '../../../utils/common';

function GameButton() {
  const dispatch = useDispatch();
  const isGameStart = useSelector((state: RootState) => state.game.isGameStart);
  const currentCardIndex = useSelector(
    (state: RootState) => state.game.currentCardIndex,
  );
  const currentCards = useSelector(
    (state: RootState) => state.game.currentCards,
  );

  const handleButton = () => {
    if (!isGameStart) {
      dispatch(startGame());
      playAudio(
        `data:audio/mp3;base64,${currentCards[currentCardIndex].audio}`,
      );
    }
    playAudio(`data:audio/mp3;base64,${currentCards[currentCardIndex].audio}`);
  };

  return (
    <button onClick={handleButton} className={styles.button} type="button">
      {isGameStart ? <img src={repeatIcon} alt="repeat" /> : 'play'}
    </button>
  );
}

export default GameButton;
