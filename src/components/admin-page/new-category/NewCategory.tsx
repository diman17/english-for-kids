import React, { useState } from 'react';
import styles from './new-category.module.css';
import createIcon from '../../../assets/icons/create.png';
import CreateView from './create-view/CreateView';

type NewCategoryProps = {
  setRerender: (arg: number) => void;
};

function NewCategory(props: NewCategoryProps) {
  const { setRerender } = props;

  const [isCreate, setIsCreate] = useState(false);

  const handleButtonClick = () => {
    setIsCreate(true);
  };

  return (
    <article className={styles.category}>
      {isCreate ? (
        <CreateView setIsCreate={setIsCreate} setRerender={setRerender} />
      ) : (
        <>
          <p className={styles.title}>Create new Category</p>
          <button onClick={handleButtonClick} className={styles.button}>
            <img src={createIcon} alt="create new category" />
          </button>
        </>
      )}
    </article>
  );
}

export default NewCategory;
