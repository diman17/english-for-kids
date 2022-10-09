import React from 'react';
import styles from './loader.module.css';

function Loader() {
  return (
    <div className={styles.loader}>
      <span />
      <span id={styles.bubble2} />
      <span id={styles.bubble3} />
    </div>
  );
}

export default Loader;
