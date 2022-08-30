import React, { useRef, useState } from 'react';
import styles from './hamburger.module.css';

function Hamburger() {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  const handleButton = () => {
    if (ref.current?.classList.contains(styles['is-active'])) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  return (
    <button
      className={
        isActive
          ? `${styles.hamburger} ${styles['is-active']}`
          : styles.hamburger
      }
      ref={ref}
      onClick={handleButton}
      type="button"
    >
      <span className={styles.line} />
      <span className={styles.line} />
      <span className={styles.line} />
    </button>
  );
}

export default Hamburger;
