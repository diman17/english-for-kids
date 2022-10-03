import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCountCardsByCategoryId } from '../../../api/cards';
import { Category as CategoryType } from '../../../types/common';
import Button from '../../../UI/buttons/button/Button';
import styles from './category.module.css';
import closeIcon from '../../../assets/icons/close.png';
import { updateCategoryName } from '../../../api/categories';

type CategoryProps = {
  category: CategoryType;
};

function Category(props: CategoryProps) {
  const { category } = props;
  const { id, name } = category;
  const [count, setCount] = useState('');
  const [isRename, setIsRename] = useState(false);
  const [categoryName, setCategoryName] = useState(name);
  const navigate = useNavigate();

  useEffect(() => {
    getCountCardsByCategoryId(id).then((count) => setCount(count));
  }, [count]);

  const handleInputNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCategoryName(event.target.value);
  };

  const handleRenameButtonClick = () => {
    setIsRename(true);
  };

  const handleAddWordButtonClick = () => {
    navigate(`cards/${id}`);
  };

  const handleCancelButtonClick = () => {
    setIsRename(false);
    setCategoryName(name);
  };

  const handleOkButtonClick = () => {
    updateCategoryName(id, categoryName);
    setIsRename(false);
  };

  return (
    <article className={styles.category}>
      {isRename ? (
        <>
          <label className={styles.label}>
            <span className={styles['label-text']}>Category Name:</span>
            <input
              onChange={handleInputNameChange}
              className={styles.input}
              type="text"
              name="name"
              value={categoryName}
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
          <p className={styles.name}>{categoryName}</p>
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
        </>
      )}
    </article>
  );
}

export default Category;
