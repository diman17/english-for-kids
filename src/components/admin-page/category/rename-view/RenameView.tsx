import React, { ChangeEvent, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { updateCategory } from '../../../../api/categories';
import { updateCategories } from '../../../../store/slices/common';
import Button from '../../../../UI/button/Button';
import styles from './rename-view.module.css';

type RenameViewProps = {
  setCategoryName: (arg: string) => void;
  setIsRename: (arg: boolean) => void;
  name: string;
  categoryId: number;
  categoryName: string;
};

function RenameView(props: RenameViewProps) {
  const { setCategoryName, setIsRename, name, categoryId, categoryName } =
    props;

  const dispatch = useDispatch();

  const setFocus = useCallback((element: HTMLInputElement) => {
    element?.focus();
  }, []);

  const handleInputNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCategoryName(event.target.value);
  };

  const handleCancelButtonClick = () => {
    setIsRename(false);
    setCategoryName(name);
  };

  const handleOkButtonClick = () => {
    updateCategory(categoryId, categoryName);
    dispatch(
      updateCategories({
        id: categoryId,
        name: categoryName,
      }),
    );
    setIsRename(false);
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

export default RenameView;
