import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../../store/store';
import { Category as CategoryType } from '../../../types/common';
import { getCardsByCategoryId, getImageFromCards } from '../../../utils/common';
import styles from './category.module.css';
import noImage from '../../../assets/images/no-image.jpg';

type CategoryProps = {
  category: CategoryType;
};

function Category(props: CategoryProps) {
  const { category } = props;
  const { id, name } = category;
  const isPlayMode = useSelector((state: RootState) => state.common.isPlayMode);

  const { cards } = useSelector((state: RootState) => state.cards);

  const cardsByCategoryId = getCardsByCategoryId(cards, category.id);

  return (
    <Link
      to={`/cards/${id}`}
      className={
        isPlayMode ? `${styles.category} ${styles.play}` : styles.category
      }
    >
      <div className={styles.wrapper}>
        <img
          className={styles.image}
          src={
            !cardsByCategoryId.length
              ? noImage
              : getImageFromCards(cardsByCategoryId)
          }
          alt={category.name}
        />
      </div>
      <div className={styles.inner}>
        <p className={styles.text}>{name}</p>
      </div>
    </Link>
  );
}

export default Category;
