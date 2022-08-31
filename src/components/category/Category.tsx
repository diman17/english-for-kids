import React from 'react';
import { Category as CategoryType } from '../../types/main';
import styles from './category.module.css';

type CategoryProps = {
  category: CategoryType;
};

function Category(props: CategoryProps) {
  const { category } = props;
  const { name, previewImage } = category;
  return (
    <a className={styles.category} href="#">
      <div className={styles.wrapper}>
        <img className={styles.image} src={previewImage} alt="category" />
      </div>
      <p className={styles.text}>{name}</p>
    </a>
  );
}

export default Category;
