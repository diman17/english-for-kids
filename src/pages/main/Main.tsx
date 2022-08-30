import React from 'react';
import Header from '../../components/header/Header';
import styles from './main.module.css';

function Main() {
  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <Header />
      </div>
    </div>
  );
}

export default Main;
