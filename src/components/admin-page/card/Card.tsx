import React, { useState } from 'react';
import { Card as CardType } from '../../../types/common';
import styles from './card.module.css';
import DefaultView from './dafault-view/DefaultView';
import ChangeView from './change-view/ChangeView';

type CardProps = {
  card: CardType;
};

function Card(props: CardProps) {
  const { card } = props;
  const { image, audioName, text, translate } = card;

  const [isChange, setIsChange] = useState(false);
  const [cardName, setCardName] = useState(text);
  const [cardTranslation, setCardTranslation] = useState(translate);
  const [cardSoundName, setCardSoundName] = useState(audioName);
  const [cardImage, setCardImage] = useState(image);

  return (
    <article className={styles.card}>
      {isChange ? (
        <ChangeView
          setCardName={setCardName}
          setCardTranslation={setCardTranslation}
          setCardSoundName={setCardSoundName}
          setCardImage={setCardImage}
          setIsChange={setIsChange}
          card={card}
          cardImage={cardImage}
          cardSoundName={cardSoundName}
          cardName={cardName}
          cardTranslation={cardTranslation}
        />
      ) : (
        <DefaultView
          setIsChange={setIsChange}
          cardName={cardName}
          cardTranslation={cardTranslation}
          cardSoundName={cardSoundName}
          cardImage={cardImage}
        />
      )}
    </article>
  );
}

export default Card;
