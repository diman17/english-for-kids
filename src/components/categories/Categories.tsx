import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Category as CategoryType } from '../../types/main';
import { State } from '../../types/store';
import Category from '../category/Category';
import styles from './categories.module.css';
import getCategories from '../../api/categoties/categories';
import { setCategories } from '../../store/slice';

function Categories() {
  const categories = useSelector((state: State) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    getCategories().then((categories) => dispatch(setCategories(categories)));
  }, []);

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
