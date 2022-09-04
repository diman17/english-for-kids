import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideNavbar, showNavbar } from '../../store/slices/common';
import { RootState } from '../../store/store';
import styles from './hamburger.module.css';

function Hamburger() {
  const dispatch = useDispatch();
  const isNavBarShown = useSelector(
    (state: RootState) => state.common.isNavbarShown,
  );
  const ref = useRef<HTMLButtonElement>(null);

  const handleButton = () => {
    if (ref.current?.classList.contains(styles['navbar-shown'])) {
      dispatch(hideNavbar());
    } else {
      dispatch(showNavbar());
    }
  };

  return (
    <button
      className={
        isNavBarShown
          ? `${styles.hamburger} ${styles['navbar-shown']}`
          : styles.hamburger
      }
      ref={ref}
      onClick={handleButton}
      type="button"
    >
      <span className={styles.line} />
      <span className={styles.line} />
      <span className={styles.line} />
    </button>
  );
}

export default Hamburger;
