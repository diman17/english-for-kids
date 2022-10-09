import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useForceUpdate from '../../../hooks/useForceUpdate';
import { fetchCards } from '../../../store/slices/cards';
import { fetchCategories } from '../../../store/slices/categories';
import {
  setCategories,
  setCards as setCardsById,
} from '../../../store/slices/common';
import { AppDispatch, RootState } from '../../../store/store';
import { Category as CategoryType } from '../../../types/common';
import Loader from '../../../UI/loader/Loader';
import Category from '../category/Category';
import NewCategory from '../new-category/NewCategory';
import styles from './categories.module.css';

function Categories() {
  const [cards, setCards] = useState([]);
  const [trigger, updateCategories] = useForceUpdate();

  const dispatch = useDispatch<AppDispatch>();

  const categories = useSelector((state: RootState) => state.common.categories);
  const { isLoading } = useSelector((state: RootState) => state.cards);

  useEffect(() => {
    dispatch(fetchCategories()).then(({ payload }) =>
      dispatch(setCategories(payload)),
    );
    dispatch(fetchCards()).then(({ payload }) => setCards(payload));
    dispatch(setCardsById([]));
  }, [trigger]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ul className={styles.list}>
      {categories.map((category: CategoryType) => (
        <li className={styles.item} key={category.id}>
          <Category
            updateCategories={updateCategories}
            category={category}
            cards={cards}
          />
        </li>
      ))}
      <li className={styles.item}>
        <NewCategory updateCategories={updateCategories} />
      </li>
    </ul>
  );
}

export default Categories;
