import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { showLoginModal } from '../../../store/slices/common';
import { RootState } from '../../../store/store';
import { Category } from '../../../types/common';
import Button from '../../../UI/buttons/button/Button';
import styles from './navbar.module.css';

function Navbar() {
  const categories = useSelector((state: RootState) => state.common.categories);
  const ref = useRef<HTMLElement>(null);
  const isNavbarShown = useSelector(
    (state: RootState) => state.common.isNavbarShown,
  );
  const isPlayMode = useSelector((state: RootState) => state.common.isPlayMode);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(showLoginModal());
  };

  return (
    <nav
      className={
        isNavbarShown
          ? `${
              isPlayMode ? `${styles.navbar} ${styles.play}` : styles.navbar
            } ${styles['navbar-shown']}`
          : `${isPlayMode ? `${styles.navbar} ${styles.play}` : styles.navbar}`
      }
      ref={ref}
    >
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/" className={styles.link}>
            categories
          </Link>
        </li>
        {categories?.map((category: Category) => (
          <li key={category.id} className={styles.item}>
            <Link to={`/cards/${category.id}`} className={styles.link}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
      <Button handleClick={handleButtonClick} shape="login" type="button">
        <p style={{ margin: '0' }}>Log in</p>
      </Button>
    </nav>
  );
}

export default Navbar;
