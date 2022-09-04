import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import getCategories from '../../api/categories';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import { setCategories } from '../../store/slices/common';
import { RootState } from '../../store/store';
import styles from './main.module.css';

function Main() {
  const isNavbarShown = useSelector(
    (state: RootState) => state.common.isNavbarShown,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    getCategories().then((categories) => dispatch(setCategories(categories)));
  }, []);

  return (
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
  );
}

export default Main;
