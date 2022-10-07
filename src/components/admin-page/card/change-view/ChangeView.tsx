import React, { ChangeEvent, useCallback, useState } from 'react';
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

  const setFocus = useCallback((element: HTMLInputElement) => {
    element?.focus();
  }, []);

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
          ref={setFocus}
          onChange={handleInputNameChange}
          className={styles.input}
          type="text"
          name="word"
          value={cardName}
          autoComplete="off"
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
          autoComplete="off"
        />
      </label>
      <div className={styles['label-file']}>
        <span className={styles['label-text']}>Sound: </span>
        <label className={styles.btn}>
          <span className={styles['visually-hidden']}>sound</span>
          <span style={{ margin: '0' }} className={styles['btn-text']}>
            {soundFile ? soundFile.name : 'Select file'}
          </span>
          <input
            onChange={handleSelectSoundFileChange}
            className={styles.input}
            type="file"
            name="sound"
          />
        </label>
      </div>
      <div className={styles['label-file']}>
        <span className={styles['label-text']}>Image: </span>
        <label className={styles.btn}>
          <span className={styles['visually-hidden']}>image</span>
          <span style={{ margin: '0' }} className={styles['btn-text']}>
            {imageFile ? imageFile.name : 'Select file'}
          </span>
          <input
            onChange={handleSelectImageFileChange}
            className={styles.input}
            type="file"
            name="image"
          />
        </label>
      </div>
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
