import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './default-view.module.css';
import closeIcon from '../../../../assets/icons/close.png';
import Button from '../../../../UI/buttons/button/Button';

type DefaultViewProps = {
  setIsRename: (arg: boolean) => void;
  categoryId: number;
  categoryName: string;
  count: string;
};

function DefaultView(props: DefaultViewProps) {
  const { setIsRename, categoryId, categoryName, count } = props;
  const navigate = useNavigate();

  const handleRenameButtonClick = () => {
    setIsRename(true);
  };

  const handleAddWordButtonClick = () => {
    navigate(`cards/${categoryId}`);
  };

  return (
    <>
      <button className={styles.button}>
        <img className={styles['button-image']} src={closeIcon} alt="close" />
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
  );
}

export default DefaultView;
