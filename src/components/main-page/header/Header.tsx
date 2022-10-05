import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import Hamburger from '../../../UI/hamburger/Hamburger';
import Switch from '../../../UI/switch/Switch';
import styles from './header.module.css';

function Header() {
  const isPlayMode = useSelector((state: RootState) => state.common.isPlayMode);

  return (
    <header className={styles.header}>
      <Hamburger />
      <h1
        className={isPlayMode ? `${styles.title} ${styles.play}` : styles.title}
      >
        English for Kids
      </h1>
      <Switch />
    </header>
  );
}

export default Header;
