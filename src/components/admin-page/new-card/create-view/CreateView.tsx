import React, { ChangeEvent, useState } from 'react';
import { createCard } from '../../../../api/cards';
import Button from '../../../../UI/buttons/button/Button';
import styles from './create-view.module.css';

type CreateViewProps = {
  setIsCreate: (arg: boolean) => void;
  setRerender: (arg: number) => void;
  categoryId: number;
};

function CreateView(props: CreateViewProps) {
  const { setIsCreate, setRerender, categoryId } = props;

  const [soundFile, setSoundFile] = useState<File | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [cardName, setCardName] = useState('');
  const [cardTranslation, setCardTranslation] = useState('');
  const [cardSound, setCardSound] = useState('');
  const [cardSoundName, setCardSoundName] = useState('');
  const [cardImage, setCardImage] = useState('');

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
    setIsCreate(false);
    setCardName('');
    setCardTranslation('');
    setSoundFile(null);
    setImageFile(null);
    setCardImage('');
    setCardSoundName('');
  };

  const handleOkButtonClick = () => {
    setIsCreate(false);
    createCard(
      cardImage,
      cardSound,
      cardSoundName,
      cardName,
      cardTranslation,
      categoryId,
    ).then(() => setRerender(Math.random()));
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

export default CreateView;
