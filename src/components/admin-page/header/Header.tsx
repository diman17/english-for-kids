import React from 'react';
import Button from '../../../UI/buttons/button/Button';
import styles from './header.module.css';

function Header() {
  const handleClick = () => {
    console.log('to main page');
  };

  return (
    <header className={styles.header}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <p className={styles.text}>Categories</p>
        </li>
        <li className={styles.item}>
          <p className={styles.text}>Words</p>
        </li>
      </ul>
      <div className={styles.button}>
        <Button handleClick={handleClick} shape="logout" type="button">
          <p style={{ margin: '0' }}>Log out</p>
        </Button>
      </div>
    </header>
  );
}

export default Header;
