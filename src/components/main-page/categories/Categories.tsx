import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { Category as CategoryType } from '../../../types/common';
import Category from '../category/Category';
import styles from './categories.module.css';

function Categories() {
  const categories = useSelector((state: RootState) => state.common.categories);

  return (
    <ul className={styles.list}>
      {categories.map((category: CategoryType) => (
        <li className={styles.item} key={category.id}>
          <Category category={category} />
        </li>
      ))}
    </ul>
  );
}

export default Categories;
