import React from 'react';
import Hamburger from '../../UI/hamburger/Hamburger';
import Switch from '../../UI/switch/Switch';
import styles from './header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <Hamburger />
      <Switch />
    </header>
  );
}

export default Header;
