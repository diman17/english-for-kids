import React from 'react';
import { categories } from '../../mocks/mocks';
import { Category as CategoryType } from '../../types/main';
import Category from '../category/Category';
import styles from './categories.module.css';

function Categories() {
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
