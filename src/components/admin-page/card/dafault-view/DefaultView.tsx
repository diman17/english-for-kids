import React from 'react';
import styles from './default-view.module.css';
import Button from '../../../../UI/button/Button';
import { deleteCard } from '../../../../api/cards';

type DefaultViewProps = {
  setIsChange: (arg: boolean) => void;
  setRerender: (arg: number) => void;
  id: number;
  cardName: string;
  cardTranslation: string;
  cardSoundName: string;
  cardImage: string;
};

function DefaultView(props: DefaultViewProps) {
  const {
    setIsChange,
    setRerender,
    id,
    cardName,
    cardTranslation,
    cardSoundName,
    cardImage,
  } = props;

  const handleButtonClick = () => {
    setIsChange(true);
  };

  const handleDeleteButtonClick = () => {
    deleteCard(id).then(() => setRerender(Date.now()));
  };

  return (
    <>
      <button onClick={handleDeleteButtonClick} className={styles.button}>
        <svg
          className={styles['button-image']}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25 25"
          xmlSpace="preserve"
        >
          <path
            fill="#5F6368"
            stroke="#5F6368"
            strokeWidth="3.232"
            strokeLinecap="round"
            d="m3.966 3.568 17.4 18.2m-17.4 0 17.4-18.2"
          />
        </svg>
      </button>
      <p className={styles.text}>
        Word: <span>{cardName}</span>
      </p>
      <p className={styles.text}>
        Translation: <span>{cardTranslation}</span>
      </p>
      <p className={styles.text}>
        Sound file: <span>{cardSoundName}</span>
      </p>
      <figure className={styles.image}>
        <figcaption className={styles.text}>Image: </figcaption>
        <img src={cardImage} alt="card" />
      </figure>
      <Button handleClick={handleButtonClick} shape="admin" type="reset">
        <p style={{ margin: '0' }}>Change</p>
      </Button>
    </>
  );
}

export default DefaultView;
