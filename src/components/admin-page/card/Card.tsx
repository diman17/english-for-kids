import React from 'react';
import { Card as CardType } from '../../../types/common';
import Button from '../../../UI/buttons/button/Button';
import styles from './card.module.css';
import closeIcon from '../../../assets/icons/close.png';

type CardProps = {
  card: CardType;
};

function Card(props: CardProps) {
  const { card } = props;
  const { image, text, translate } = card;

  const handleButtonClick = () => {
    console.log('change');
  };

  return (
    <article className={styles.card}>
      <button className={styles.button}>
        <img className={styles['button-image']} src={closeIcon} alt="close" />
      </button>
      <p className={styles.text}>
        Word: <span>{text}</span>
      </p>
      <p className={styles.text}>
        Translation: <span>{translate}</span>
      </p>
      <p className={styles.text}>
        Sound file: <span>soundName</span>
      </p>
      <figure className={styles.image}>
        <figcaption className={styles.text}>Image: </figcaption>
        <img src={`data:image/jpeg;base64,${image}`} alt="card" />
      </figure>
      <Button handleClick={handleButtonClick} shape="admin" type="reset">
        <p style={{ margin: '0' }}>Change</p>
      </Button>
    </article>
  );
}

export default Card;
