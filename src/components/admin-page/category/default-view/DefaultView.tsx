import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './default-view.module.css';
import Button from '../../../../UI/button/Button';
import { deleteCategory } from '../../../../api/categories';

type DefaultViewProps = {
  setIsRename: (arg: boolean) => void;
  setRerender: (arg: number) => void;
  categoryId: number;
  categoryName: string;
  count: number | null;
};

function DefaultView(props: DefaultViewProps) {
  const { setIsRename, setRerender, categoryId, categoryName, count } = props;

  const navigate = useNavigate();

  const handleRenameButtonClick = () => {
    setIsRename(true);
  };

  const handleAddWordButtonClick = () => {
    navigate(`cards/${categoryId}`);
  };

  const handleDeleteButtonClick = () => {
    deleteCategory(categoryId).then(() => setRerender(Date.now()));
  };

  return (
    <>
      <button onClick={handleDeleteButtonClick} className={styles.button}>
        <svg
          className={styles['button-image']}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25 25"
          xmlSpace="preserve"
        >
          <path
            strokeWidth="3.232"
            strokeLinecap="round"
            d="m3.966 3.568 17.4 18.2m-17.4 0 17.4-18.2"
          />
        </svg>
      </button>
      <div className={styles.inner}>
        <p className={styles.name}>{categoryName}</p>
      </div>
      <p className={styles.words}>
        words: <span className={styles['words-number']}>{count}</span>
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
  );
}

export default DefaultView;
