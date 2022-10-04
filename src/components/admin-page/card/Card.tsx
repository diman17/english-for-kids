import React, { ChangeEvent, useState } from 'react';
import { Card as CardType } from '../../../types/common';
import Button from '../../../UI/buttons/button/Button';
import styles from './card.module.css';
import closeIcon from '../../../assets/icons/close.png';
import { updateCard } from '../../../api/cards';

type CardProps = {
  card: CardType;
};

function Card(props: CardProps) {
  const { card } = props;
  const { id, image, audio, audioName, text, translate } = card;
  const [isChange, setIsChange] = useState(false);
  const [name, setName] = useState(text);
  const [cardTranslation, setCardTranslation] = useState(translate);
  const [soundFile, setSoundFile] = useState<File | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [cardSound, setCardSound] = useState(audio);
  const [cardSoundName, setCardSoundName] = useState(audioName);
  const [cardImage, setCardImage] = useState(image);

  const handleButtonClick = () => {
    setIsChange(true);
  };

  const handleInputNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleInputTranslationChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setCardTranslation(event.target.value);
  };

  const handleSelectSoundFileChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setSoundFile(event.target.files![0]);
    setCardSoundName(event.target.files![0].name);

    const reader = new FileReader();
    reader.readAsDataURL(event.target.files![0]);
    reader.onload = () => setCardSound(reader.result as string);
  };

  const handleSelectImageFileChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setImageFile(event.target.files![0]);

    const reader = new FileReader();
    reader.readAsDataURL(event.target.files![0]);
    reader.onload = () => setCardImage(reader.result as string);
  };

  const handleCancelButtonClick = () => {
    setIsChange(false);
    setName(text);
    setCardTranslation(translate);
    setSoundFile(null);
    setImageFile(null);
    setCardImage(image);
    setCardSoundName(audioName);
  };

  const handleOkButtonClick = () => {
    setIsChange(false);
    updateCard(id, cardImage, cardSound, cardSoundName, name, cardTranslation);
  };

  return (
    <article className={styles.card}>
      {isChange ? (
        <>
          <label className={styles.label}>
            <span className={styles['label-text']}>Word: </span>
            <input
              onChange={handleInputNameChange}
              className={styles.input}
              type="text"
              name="word"
              value={name}
            />
          </label>
          <label className={styles.label}>
            <span className={styles['label-text']}>Translation: </span>
            <input
              onChange={handleInputTranslationChange}
              className={styles.input}
              type="text"
              name="translation"
              value={cardTranslation}
            />
          </label>
          <label className={styles.label}>
            <span className={styles['label-text']}>Sound: </span>
            <p
              className={soundFile ? styles.input : styles.btn}
              style={{ margin: '0' }}
            >
              {soundFile ? soundFile.name : 'Select file'}
            </p>
            <input
              onChange={handleSelectSoundFileChange}
              className={styles.input}
              type="file"
              name="sound"
            />
          </label>
          <label className={styles.label}>
            <span className={styles['label-text']}>Image: </span>
            <p
              className={imageFile ? styles.input : styles.btn}
              style={{ margin: '0' }}
            >
              {imageFile ? imageFile.name : 'Select file'}
            </p>
            <input
              onChange={handleSelectImageFileChange}
              className={styles.input}
              type="file"
              name="image"
            />
          </label>
          <div className={styles.buttons}>
            <Button
              handleClick={handleCancelButtonClick}
              shape="cancel"
              type="button"
            >
              <p style={{ margin: '0' }}>Cancel</p>
            </Button>
            <Button
              handleClick={handleOkButtonClick}
              shape="admin"
              type="button"
            >
              <p style={{ margin: '0' }}>Ok</p>
            </Button>
          </div>
        </>
      ) : (
        <>
          <button className={styles.button}>
            <img
              className={styles['button-image']}
              src={closeIcon}
              alt="close"
            />
          </button>
          <p className={styles.text}>
            Word: <span>{name}</span>
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
      )}
    </article>
  );
}

export default Card;
