import React from 'react';
import { Link } from 'react-router-dom';
import { Category as CategoryType } from '../../types/main';
import styles from './category.module.css';

type CategoryProps = {
  category: CategoryType;
};

function Category(props: CategoryProps) {
  const { category } = props;
  const { name, previewImage } = category;
  return (
    <Link to={`/${name}`} className={styles.category}>
      <div className={styles.wrapper}>
        <img className={styles.image} src={previewImage} alt="category" />
      </div>
      <p className={styles.text}>{name}</p>
    </Link>
  );
}

export default Category;
