import React from 'react';
import styles from './default-view.module.css';
import closeIcon from '../../../../assets/icons/close.png';
import Button from '../../../../UI/buttons/button/Button';
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
    deleteCard(id).then(() => setRerender(Math.random()));
  };

  return (
    <>
      <button onClick={handleDeleteButtonClick} className={styles.button}>
        <img className={styles['button-image']} src={closeIcon} alt="close" />
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
