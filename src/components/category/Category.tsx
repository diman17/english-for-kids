import React from 'react';
import { Link } from 'react-router-dom';
import { Category as CategoryType } from '../../types/main';
import styles from './category.module.css';

type CategoryProps = {
  category: CategoryType;
};

function Category(props: CategoryProps) {
  const { category } = props;
  const { id, name, previewImage } = category;
  return (
    <Link to={`/cards/${id}`} className={styles.category}>
      <div className={styles.wrapper}>
        <img className={styles.image} src={previewImage} alt={category.name} />
      </div>
      <p className={styles.text}>{name}</p>
    </Link>
  );
}

export default Category;
