import React, { useRef, useState } from 'react';
import styles from './switch.module.css';

function Switch() {
  const [isChecked, setIsChecked] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const handleInput = () => {
    setIsChecked(ref.current?.checked as boolean);
  };

  return (
    <label htmlFor="switch" className={styles.switch}>
      <input
        className={styles.checkbox}
        id="switch"
        ref={ref}
        onChange={handleInput}
        type="checkbox"
      />
      <span className={styles.circle} />
      <span className={styles.text}>train</span>
    </label>
  );
}

export default Switch;
