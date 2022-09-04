import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { finishGame, startGame } from '../../../store/slices/game';
import { RootState } from '../../../store/store';
import styles from './game-button.module.css';

function GameButton() {
  const isGameStart = useSelector((state: RootState) => state.game.isGameStart);
  const dispatch = useDispatch();

  const handleButton = () => {
    if (!isGameStart) {
      dispatch(startGame());
    }
  };

  return (
    <button onClick={handleButton} className={styles.button} type="button">
      play
    </button>
  );
}

export default GameButton;
