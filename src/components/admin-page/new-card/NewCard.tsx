import React, { useState } from 'react';
import styles from './new-card.module.css';
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
            <svg
              className={styles['button-image']}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 251.9 251.9"
              xmlSpace="preserve"
            >
              <path
                className={styles.circle}
                d="M215 36.8c-49.1-49.1-129-49.1-178.2 0-49.1 49.2-49.1 129.1 0 178.2 24.6 24.6 56.8 36.8 89.1 36.8s64.5-12.3 89.1-36.8c49.2-49.1 49.2-129 0-178.2zM49.6 202.3C7.5 160.2 7.5 91.7 49.6 49.6 70.6 28.5 98.3 18 125.9 18s55.3 10.5 76.4 31.6c42.1 42.1 42.1 110.6 0 152.7-42.1 42.1-110.6 42.1-152.7 0z"
              />
              <path
                className={styles.plus}
                d="M194.8 116.9h-59.9V57.1c0-5-4-9-9-9s-9 4-9 9V117H57.1c-5 0-9 4-9 9s4 9 9 9H117v59.9c0 5 4 9 9 9s9-4 9-9V135h59.9c5 0 9-4 9-9s-4.1-9.1-9.1-9.1z"
              />
            </svg>
          </button>
        </>
      )}
    </article>
  );
}

export default NewCard;
