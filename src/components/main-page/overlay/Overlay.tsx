import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoginModal } from '../../../store/slices/common';
import { RootState } from '../../../store/store';
import styles from './overlay.module.css';

function Overlay() {
  const dispatch = useDispatch();

  const isLoginModalShown = useSelector(
    (state: RootState) => state.common.isLoginModalShown,
  );

  const handleClick = () => {
    dispatch(hideLoginModal());
  };

  return (
    <div
      onClick={handleClick}
      className={
        isLoginModalShown ? `${styles.overlay} ${styles.show}` : styles.overlay
      }
    />
  );
}

export default Overlay;
