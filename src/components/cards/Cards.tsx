import React from 'react';
import { useParams } from 'react-router-dom';
import { cards } from '../../mocks/mocks';
import { Card as CardType } from '../../types/main';
import Card from '../card/Card';
import styles from './cards.module.css';

function Cards() {
  const params = useParams();
  return (
    <ul className={styles.list}>
      {cards
        .filter((card) => card.category === params.category)
        .map((card: CardType) => (
          <li key={card.id} className={styles.item}>
            <Card card={card} />
          </li>
        ))}
    </ul>
  );
}

export default Cards;
