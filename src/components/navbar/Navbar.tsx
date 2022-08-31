import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { categories } from '../../mocks/mocks';
import { Category } from '../../types/main';
import { State } from '../../types/store';
import styles from './navbar.module.css';

function Navbar() {
  const ref = useRef<HTMLElement>(null);
  const isNavbarShown = useSelector((state: State) => state.isNavbarShown);

  return (
    <nav
      className={
        isNavbarShown
          ? `${styles.navbar} ${styles['navbar-shown']}`
          : styles.navbar
      }
      ref={ref}
    >
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/" className={styles.link}>
            categories
          </Link>
        </li>
        {categories.map((category: Category) => (
          <li key={category.id} className={styles.item}>
            <Link to={`/${category.name}`} className={styles.link}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
