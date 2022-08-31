import React from 'react';
import { useSelector } from 'react-redux';
import GameField from '../../components/game-field/GameField';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import { State } from '../../types/store';
import styles from './main.module.css';
import { categories } from '../../mocks/mocks';

function Main() {
  const isNavbarShown = useSelector((state: State) => state.isNavbarShown);
  return (
    <div className={styles.page}>
      <div
        className={
          isNavbarShown
            ? `${styles.inner} ${styles['navbar-shown']}`
            : styles.inner
        }
      >
        <Navbar categories={categories} />
        <div className={styles.wrapper}>
          <Header />
          <GameField categories={categories} />
        </div>
      </div>
    </div>
  );
}

export default Main;
