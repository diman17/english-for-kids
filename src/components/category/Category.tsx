import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Category as CategoryType } from '../../types/main';
import { State } from '../../types/store';
import styles from './category.module.css';

type CategoryProps = {
  category: CategoryType;
};

function Category(props: CategoryProps) {
  const { category } = props;
  const { id, name, previewImage } = category;
  const isPlayMode = useSelector((state: State) => state.isPlayMode);

  return (
    <Link
      to={`/cards/${id}`}
      className={
        isPlayMode ? `${styles.category} ${styles.play}` : styles.category
      }
    >
      <div className={styles.wrapper}>
        <img className={styles.image} src={previewImage} alt={category.name} />
      </div>
      <p className={styles.text}>{name}</p>
    </Link>
  );
}

export default Category;
