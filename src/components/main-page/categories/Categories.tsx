import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { Category as CategoryType } from '../../../types/common';
import Category from '../category/Category';
import styles from './categories.module.css';
import { fetchCards } from '../../../store/slices/cards';
import Loader from '../../../UI/loader/Loader';

function Categories() {
  const dispatch = useDispatch<AppDispatch>();

  const { categories } = useSelector((state: RootState) => state.categories);
  const { isLoading } = useSelector((state: RootState) => state.cards);

  useEffect(() => {
    dispatch(fetchCards());
  }, []);

  if (isLoading) {
    return <Loader />;
  }

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
