import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../../components/main-page/header/Header';
import LoginModal from '../../components/main-page/login-modal/LoginModal';
import Navbar from '../../components/main-page/navbar/Navbar';
import Overlay from '../../components/main-page/overlay/Overlay';
import { fetchCategories } from '../../store/slices/categories';
import {
  finishGame,
  resetCurrentCard,
  resetMistakes,
  resetStars,
} from '../../store/slices/game';
import { AppDispatch, RootState } from '../../store/store';
import styles from './main.module.css';

function Main() {
  const location = useLocation();

  const dispatch = useDispatch<AppDispatch>();

  const isNavbarShown = useSelector(
    (state: RootState) => state.common.isNavbarShown,
  );

  useEffect(() => {
    dispatch(finishGame());
    dispatch(resetMistakes());
    dispatch(resetStars());
    dispatch(resetCurrentCard());
  }, [location]);

  useEffect(() => {
    dispatch(fetchCategories());
  });

  return (
    <>
      <div className={styles.page}>
        <div
          className={
            isNavbarShown
              ? `${styles.inner} ${styles['navbar-shown']}`
              : styles.inner
          }
        >
          <Navbar />
          <div className={styles.wrapper}>
            <Header />
            <main className={styles.main}>
              <Outlet />
            </main>
          </div>
        </div>
      </div>
      <LoginModal />
      <Overlay />
    </>
  );
}

export default Main;
