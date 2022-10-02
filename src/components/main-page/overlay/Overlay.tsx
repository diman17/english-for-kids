import React from 'react';
import { useDispatch } from 'react-redux';
import { hideLoginModal } from '../../../store/slices/common';
import styles from './overlay.module.css';

function Overlay() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(hideLoginModal());
  };

  return <div onClick={handleClick} className={styles.overlay} />;
}

export default Overlay;
