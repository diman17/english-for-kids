import React from 'react';
import { Categories, Category as CategoryType } from '../../types/main';
import Category from '../category/Category';
import styles from './game-field.module.css';

type GameFieldProps = {
  categories: Categories;
};

function GameField(props: GameFieldProps) {
  const { categories } = props;

  return (
    <main className={styles.main}>
      <ul className={styles.list}>
        {categories.map((category: CategoryType) => (
          <li className={styles.item} key={category.id}>
            <Category category={category} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default GameField;
