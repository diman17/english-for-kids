import React, { ChangeEvent, useState } from 'react';
import { updateCard } from '../../../../api/cards';
import { Card } from '../../../../types/common';
import Button from '../../../../UI/button/Button';
import styles from './change-view.module.css';

type ChangeTypeProps = {
  setCardName: (arg: string) => void;
  setCardTranslation: (arg: string) => void;
  setCardSoundName: (arg: string) => void;
  setCardImage: (arg: string) => void;
  setIsChange: (arg: boolean) => void;
  card: Card;
  cardImage: string;
  cardSoundName: string;
  cardName: string;
  cardTranslation: string;
};

function ChangeView(props: ChangeTypeProps) {
  const {
    setCardName,
    setCardTranslation,
    setCardSoundName,
    setCardImage,
    setIsChange,
    card,
    cardImage,
    cardSoundName,
    cardName,
    cardTranslation,
  } = props;

  const { id, image, audio, audioName, text, translate } = card;

  const [soundFile, setSoundFile] = useState<File | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [cardSound, setCardSound] = useState(audio);

  const handleInputNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCardName(event.target.value);
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
    setCardName(text);
    setCardTranslation(translate);
    setSoundFile(null);
    setImageFile(null);
    setCardImage(image);
    setCardSoundName(audioName);
  };

  const handleOkButtonClick = () => {
    setIsChange(false);
    updateCard(
      id,
      cardImage,
      cardSound,
      cardSoundName,
      cardName,
      cardTranslation,
    );
  };

  return (
    <>
      <label className={styles.label}>
        <span className={styles['label-text']}>Word: </span>
        <input
          onChange={handleInputNameChange}
          className={styles.input}
          type="text"
          name="word"
          value={cardName}
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
        <Button handleClick={handleOkButtonClick} shape="admin" type="button">
          <p style={{ margin: '0' }}>Ok</p>
        </Button>
      </div>
    </>
  );
}

export default ChangeView;
