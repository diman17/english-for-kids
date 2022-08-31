import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
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
      Navbar
    </nav>
  );
}

export default Navbar;
