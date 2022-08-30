import React from 'react';
import Switch from '../../UI/switch/Switch';
import styles from './header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <Switch />
    </header>
  );
}

export default Header;
