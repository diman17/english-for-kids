import React, { ChangeEvent, useCallback, useState } from 'react';
import { createCategory } from '../../../../api/categories';
import Button from '../../../../UI/button/Button';
import styles from './create-view.module.css';

type CreateViewProps = {
  setIsCreate: (arg: boolean) => void;
  setRerender: (arg: number) => void;
};

function CreateView(props: CreateViewProps) {
  const { setIsCreate, setRerender } = props;

  const [categoryName, setCategoryName] = useState('');

  const setFocus = useCallback((element: HTMLInputElement) => {
    element?.focus();
  }, []);

  const handleInputNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCategoryName(event.target.value);
  };

  const handleCancelButtonClick = () => {
    setIsCreate(false);
    setCategoryName('');
  };

  const handleOkButtonClick = () => {
    setIsCreate(false);
    createCategory(categoryName).then(() => setRerender(Date.now()));
  };

  return (
    <>
      <label className={styles.label}>
        <span className={styles['label-text']}>Category name:</span>
        <input
          ref={setFocus}
          onChange={handleInputNameChange}
          className={styles.input}
          type="text"
          name="name"
          value={categoryName}
          autoComplete="off"
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
