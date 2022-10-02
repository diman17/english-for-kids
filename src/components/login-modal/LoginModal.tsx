import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Button from '../../UI/buttons/button/Button';
import styles from './login-modal.module.css';

function LoginModal() {
  const isPlayMode = useSelector((state: RootState) => state.common.isPlayMode);

  return (
    <section className={styles.modal}>
      <h2 className={styles.title}>Log in</h2>
      <form action="#">
        <label className={styles.label}>
          <span className={styles['label-text']}>login</span>
          <input
            className={styles.input}
            type="text"
            name="login"
            placeholder="admin"
          />
        </label>
        <label className={styles.label}>
          <span className={styles['label-text']}>password</span>
          <input
            className={styles.input}
            type="password"
            name="password"
            placeholder="admin"
          />
        </label>
        <div
          className={
            isPlayMode ? `${styles.buttons} ${styles.play}` : styles.buttons
          }
        >
          <Button shape="cancel" type="reset">
            <p style={{ margin: '0' }}>Cancel</p>
          </Button>
          <Button shape="submit" type="submit">
            <p style={{ margin: '0' }}>Log in</p>
          </Button>
        </div>
      </form>
    </section>
  );
}

export default LoginModal;
