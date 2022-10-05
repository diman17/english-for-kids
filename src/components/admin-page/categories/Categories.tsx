import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllCards } from '../../../api/cards';
import { getCategories } from '../../../api/categories';
import { setCategories } from '../../../store/slices/common';
import { RootState } from '../../../store/store';
import { Category as CategoryType } from '../../../types/common';
import Category from '../category/Category';
import NewCategory from '../new-category/NewCategory';
import styles from './categories.module.css';

function Categories() {
  const [cards, setCards] = useState([]);
  const [rerender, setRerender] = useState(0);

  const dispatch = useDispatch();
  const categories = useSelector((state: RootState) => state.common.categories);

  useEffect(() => {
    getCategories().then((categories) => dispatch(setCategories(categories)));
    getAllCards().then((cards) => setCards(cards));
  }, [rerender]);

  return (
    <ul className={styles.list}>
      {categories.map((category: CategoryType) => (
        <li className={styles.item} key={category.id}>
          <Category category={category} cards={cards} />
        </li>
      ))}
      <li className={styles.item}>
        <NewCategory setRerender={setRerender} />
      </li>
    </ul>
  );
}

export default Categories;
