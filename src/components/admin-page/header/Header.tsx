import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { logOutAdmin } from '../../../store/slices/common';
import Button from '../../../UI/button/Button';
import styles from './header.module.css';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isCategoriesPage = !location.pathname.includes('cards');

  const handleClick = () => {
    dispatch(logOutAdmin());
    navigate('/');
  };

  return (
    <header className={styles.header}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <p
            className={
              isCategoriesPage ? `${styles.text} ${styles.active}` : styles.text
            }
          >
            Categories
          </p>
        </li>
        <li className={styles.item}>
          <p
            className={
              isCategoriesPage ? styles.text : `${styles.text} ${styles.active}`
            }
          >
            Words
          </p>
        </li>
      </ul>
      <div className={styles.button}>
        <Button handleClick={handleClick} shape="log" type="button">
          <p style={{ margin: '0' }}>Log out</p>
        </Button>
      </div>
    </header>
  );
}

export default Header;
