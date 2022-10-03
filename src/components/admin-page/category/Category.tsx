import React, { useEffect, useState } from 'react';
import { getCountCardsByCategoryId } from '../../../api/cards';
import { Category as CategoryType } from '../../../types/common';
import Button from '../../../UI/buttons/button/Button';
import styles from './category.module.css';
import closeIcon from '../../../assets/icons/close.png';

type CategoryProps = {
  category: CategoryType;
};

function Category(props: CategoryProps) {
  const { category } = props;
  const { id, name } = category;
  const [count, setCount] = useState('');

  useEffect(() => {
    getCountCardsByCategoryId(id).then((count) => setCount(count));
  }, [count]);

  const handleRenameButtonClick = () => {
    console.log('rename category');
  };

  const handleAddWordButtonClick = () => {
    console.log('add word');
  };

  return (
    <article className={styles.category}>
      <button className={styles.button}>
        <img className={styles['button-image']} src={closeIcon} alt="close" />
      </button>
      <p className={styles.name}>{name}</p>
      <p className={styles.words}>
        Words: <span className={styles['words-number']}>{count}</span>
      </p>
      <div className={styles.buttons}>
        <Button
          handleClick={handleRenameButtonClick}
          shape="admin"
          type="button"
        >
          <p style={{ margin: '0' }}>Rename</p>
        </Button>
        <Button
          handleClick={handleAddWordButtonClick}
          shape="admin"
          type="button"
        >
          <p style={{ margin: '0' }}>Add word</p>
        </Button>
      </div>
    </article>
  );
}

export default Category;
