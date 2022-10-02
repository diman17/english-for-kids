import React from 'react';
import styles from './button.module.css';

type ButtonProps = {
  shape: 'login' | 'cancel' | 'submit' | 'logout';
  type: 'button' | 'submit' | 'reset';
  handleClick: () => void;
  children: JSX.Element;
};

function Button(props: ButtonProps) {
  const { shape, type, handleClick, children } = props;

  return (
    <button
      onClick={handleClick}
      className={`${styles.button} ${styles[`button-${shape}`]}`}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
