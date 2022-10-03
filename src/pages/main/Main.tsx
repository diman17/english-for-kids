import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import { getCategories } from '../../api/categories';
import Header from '../../components/main-page/header/Header';
import LoginModal from '../../components/main-page/login-modal/LoginModal';
import Navbar from '../../components/main-page/navbar/Navbar';
import Overlay from '../../components/main-page/overlay/Overlay';
import { setCategories } from '../../store/slices/common';
import { finishGame } from '../../store/slices/game';
import { RootState } from '../../store/store';
import styles from './main.module.css';

function Main() {
  const location = useLocation();
  const isNavbarShown = useSelector(
    (state: RootState) => state.common.isNavbarShown,
  );
  const isLoginModalShown = useSelector(
    (state: RootState) => state.common.isLoginModalShown,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(finishGame());
  }, [location]);

  useEffect(() => {
    getCategories().then((categories) => dispatch(setCategories(categories)));
  }, []);

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
      {isLoginModalShown ? (
        <>
          <LoginModal />
          <Overlay />
        </>
      ) : (
        ''
      )}
    </>
  );
}

export default Main;
