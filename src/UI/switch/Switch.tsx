import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { enablePlayMode, disablePlayMode } from '../../store/slice';
import { State } from '../../types/store';
import styles from './switch.module.css';

function Switch() {
  const [isChecked, setIsChecked] = useState(false);
  const isPlayMode = useSelector((state: State) => state.isPlayMode);
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
