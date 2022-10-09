import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import useForceUpdate from '../../../hooks/useForceUpdate';
import { fetchCardsByCategoryId } from '../../../store/slices/cards';
import { setCards } from '../../../store/slices/common';
import { AppDispatch, RootState } from '../../../store/store';
import { Card as CardType } from '../../../types/common';
import Loader from '../../../UI/loader/Loader';
import Card from '../card/Card';
import NewCard from '../new-card/NewCard';
import styles from './cards.module.css';

function Cards() {
  const [trigger, updateCards] = useForceUpdate();

  const params = useParams();
  const categoryId = Number(params.categoryId);

  const dispatch = useDispatch<AppDispatch>();

  const cards = useSelector((state: RootState) => state.common.cards);

  const { isLoading } = useSelector((state: RootState) => state.cards);

  useEffect(() => {
    dispatch(fetchCardsByCategoryId(categoryId)).then(({ payload }) => {
      dispatch(setCards(payload));
    });
  }, [categoryId, trigger]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ul className={styles.list}>
      {cards?.map((card: CardType) => (
        <li key={card.id} className={styles.item}>
          <Card updateCards={updateCards} card={card} categoryId={categoryId} />
        </li>
      ))}
      <li className={styles.item}>
        <NewCard categoryId={categoryId} updateCards={updateCards} />
      </li>
    </ul>
  );
}

export default Cards;
