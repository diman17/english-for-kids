import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCards } from '../../../api/cards';
import { getCategories } from '../../../api/categories';
import useForceUpdate from '../../../hooks/useForceUpdate';
import {
  setCategories,
  setCards as setCardsById,
} from '../../../store/slices/common';
import { RootState } from '../../../store/store';
import { Category as CategoryType } from '../../../types/common';
import Category from '../category/Category';
import NewCategory from '../new-category/NewCategory';
import styles from './categories.module.css';

function Categories() {
  const [cards, setCards] = useState([]);
  const [trigger, updateCategories] = useForceUpdate();

  const dispatch = useDispatch();
  const categories = useSelector((state: RootState) => state.common.categories);

  useEffect(() => {
    getCategories().then((categories) => dispatch(setCategories(categories)));
    getAllCards().then((cards) => setCards(cards));
    dispatch(setCardsById([]));
  }, [trigger]);

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
