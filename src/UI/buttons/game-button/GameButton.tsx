import React from 'react';
import styles from './game-button.module.css';

function GameButton() {
  return (
    <button className={styles.button} type="button">
      play
    </button>
  );
}

export default GameButton;
