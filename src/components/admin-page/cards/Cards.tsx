import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCardsByCategoryId } from '../../../api/cards';
import useForceUpdate from '../../../hooks/useForceUpdate';
import { setCards } from '../../../store/slices/common';
import { RootState } from '../../../store/store';
import { Card as CardType, Cards as CardsType } from '../../../types/common';
import Card from '../card/Card';
import NewCard from '../new-card/NewCard';
import styles from './cards.module.css';

function Cards() {
  const [trigger, updateCards] = useForceUpdate();

  const params = useParams();
  const categoryId = params.categoryId as string;

  const dispatch = useDispatch();

  const cards = useSelector((state: RootState) => state.common.cards);

  useEffect(() => {
    getCardsByCategoryId(Number(categoryId)).then((cards: CardsType) => {
      dispatch(setCards(cards));
    });
  }, [categoryId, trigger]);

  return (
    <ul className={styles.list}>
      {cards?.map((card: CardType) => (
        <li key={card.id} className={styles.item}>
          <Card
            updateCards={updateCards}
            card={card}
            categoryId={Number(categoryId)}
          />
        </li>
      ))}
      <li className={styles.item}>
        <NewCard categoryId={Number(categoryId)} updateCards={updateCards} />
      </li>
    </ul>
  );
}

export default Cards;
