import React, { useState } from 'react';
import styles from './new-card.module.css';
import createIcon from '../../../assets/icons/create.png';
import CreateView from './create-view/CreateView';

type NewCardProps = {
  categoryId: number;
  setRerender: (arg: number) => void;
};

function NewCard(props: NewCardProps) {
  const { categoryId, setRerender } = props;

  const [isCreate, setIsCreate] = useState(false);

  const handleButtonClick = () => {
    setIsCreate(true);
  };

  return (
    <article className={styles.card}>
      {isCreate ? (
        <CreateView
          setIsCreate={setIsCreate}
          setRerender={setRerender}
          categoryId={categoryId}
        />
      ) : (
        <>
          <p className={styles.title}>Create new Card</p>
          <button onClick={handleButtonClick} className={styles.button}>
            <img src={createIcon} alt="create new category" />
          </button>
        </>
      )}
    </article>
  );
}

export default NewCard;
