import React from 'react';
import styles from './button.module.css';

type ButtonProps = {
  shape: 'login';
  type: 'button' | 'submit';
  children: JSX.Element;
};

function Button(props: ButtonProps) {
  const { shape, type, children } = props;

  return (
    <button
      className={`${styles.button} ${styles[`button-${shape}`]}`}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
