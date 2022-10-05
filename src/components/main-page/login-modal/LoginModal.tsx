import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  hideLoginModal,
  hideNavbar,
  logInAdmin,
} from '../../../store/slices/common';
import { RootState } from '../../../store/store';
import Button from '../../../UI/button/Button';
import styles from './login-modal.module.css';

function LoginModal() {
  const isPlayMode = useSelector((state: RootState) => state.common.isPlayMode);
  const admin = useSelector((state: RootState) => state.common.admin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleLoginInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginValue(event.target.value);
  };

  const handlePasswordInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value);
  };

  const handleCancelButtonClick = () => {
    setLoginValue('');
    setPasswordValue('');
  };

  const handleSubmitButtonClick = () => {
    if (
      admin.login === loginValue.toLocaleLowerCase() &&
      admin.password === passwordValue.toLocaleLowerCase()
    ) {
      dispatch(logInAdmin());
      navigate('/admin');
      dispatch(hideLoginModal());
      dispatch(hideNavbar());
    } else {
      alert(`
        login: 'admin'
        password: 'admin'
      `);
    }
  };

  return (
    <section className={styles.modal}>
      <h2 className={styles.title}>Log in</h2>
      <form
        onSubmit={(event: FormEvent<HTMLFormElement>) => event.preventDefault()}
        action="#"
      >
        <label className={styles.label}>
          <span className={styles['label-text']}>login</span>
          <input
            onChange={handleLoginInputChange}
            className={styles.input}
            type="text"
            name="login"
            placeholder="admin"
          />
        </label>
        <label className={styles.label}>
          <span className={styles['label-text']}>password</span>
          <input
            onChange={handlePasswordInputChange}
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
          <Button
            handleClick={handleCancelButtonClick}
            shape="cancel"
            type="reset"
          >
            <p style={{ margin: '0' }}>Cancel</p>
          </Button>
          <Button
            handleClick={handleSubmitButtonClick}
            shape="submit"
            type="submit"
          >
            <p style={{ margin: '0' }}>Log in</p>
          </Button>
        </div>
      </form>
    </section>
  );
}

export default LoginModal;
