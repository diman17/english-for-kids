import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { enablePlayMode, disablePlayMode } from '../../store/slices/common';
import {
  finishGame,
  resetCurrentCard,
  resetMistakes,
  resetStars,
} from '../../store/slices/game';
import { RootState } from '../../store/store';
import styles from './switch.module.css';

function Switch() {
  const [isChecked, setIsChecked] = useState(false);
  const isPlayMode = useSelector((state: RootState) => state.common.isPlayMode);
  const dispatch = useDispatch();
  const ref = useRef<HTMLInputElement>(null);

  const handleInput = () => {
    setIsChecked(ref.current?.checked as boolean);
  };

  useEffect(() => {
    if (isChecked) {
      dispatch(enablePlayMode());
    } else {
      dispatch(disablePlayMode());
      dispatch(finishGame());
      dispatch(resetCurrentCard());
      dispatch(resetStars());
      dispatch(resetMistakes());
    }
  }, [isChecked]);

  return (
    <label
      htmlFor="switch"
      className={
        isPlayMode ? `${styles.switch} ${styles.play}` : `${styles.switch}`
      }
    >
      <input
        className={styles.checkbox}
        id="switch"
        ref={ref}
        onChange={handleInput}
        type="checkbox"
      />
      <span className={styles.circle} />
      <span className={styles.text}>{isPlayMode ? 'play' : 'train'}</span>
    </label>
  );
}

export default Switch;
