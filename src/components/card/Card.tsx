import React from 'react';
import { Card as CardType } from '../../types/main';
import styles from './card.module.css';
import rotateIcon from '../../assets/icons/rotate.svg';

type CardProps = {
  card: CardType;
};

function Card(props: CardProps) {
  const { card } = props;
  const { image, audio, text, translate } = card;

  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.back}>
            <img className={styles.image} src={image} alt="card" />
            <p className={styles.text}>{translate}</p>
          </div>
          <div className={styles.front}>
            <img className={styles.image} src={image} alt="card" />
            <p className={styles.text}>{text}</p>
            <audio src={audio} />
            <img
              className={styles['rotate-image']}
              src={rotateIcon}
              alt="rotate"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
