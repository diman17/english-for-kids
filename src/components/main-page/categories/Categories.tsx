import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllCards } from '../../../api/cards';
import { RootState } from '../../../store/store';
import { Cards, Category as CategoryType } from '../../../types/common';
import {
  getCardsByCategoryId,
  getRandomImageFromCards,
} from '../../../utils/common';
import Category from '../category/Category';
import styles from './categories.module.css';
import noImage from '../../../assets/images/no-image.jpg';

function Categories() {
  const categories = useSelector((state: RootState) => state.common.categories);

  const [cards, setCards] = useState<Cards>([]);

  useEffect(() => {
    getAllCards().then((cards: Cards) => setCards(cards));
  }, []);

  return (
    <ul className={styles.list}>
      {categories.map((category: CategoryType) => {
        const cardsByCategoryId = getCardsByCategoryId(cards, category.id);

        let imageCategory: string;
        if (cardsByCategoryId.length === 0) {
          imageCategory = noImage;
        } else {
          imageCategory = getRandomImageFromCards(cardsByCategoryId) as string;
        }

        return (
          <li className={styles.item} key={category.id}>
            <Category category={category} image={imageCategory} />
          </li>
        );
      })}
    </ul>
  );
}

export default Categories;
