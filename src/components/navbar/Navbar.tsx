import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Categories, Category } from '../../types/main';
import { State } from '../../types/store';
import styles from './navbar.module.css';

type NavbarProps = {
  categories: Categories;
};

function Navbar(props: NavbarProps) {
  const { categories } = props;
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
        {categories.map((category: Category) => (
          <li key={category.id} className={styles.item}>
            <a className={styles.link} href="#">
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
