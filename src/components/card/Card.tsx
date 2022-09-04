import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Card as CardType } from '../../types/main';
import styles from './card.module.css';
import rotateIcon from '../../assets/icons/rotate.svg';
import { State } from '../../types/store';

type CardProps = {
  card: CardType;
};

function Card(props: CardProps) {
  const { card } = props;
  const { image, audio, text, translate } = card;

  const cardRef = useRef<HTMLDivElement>(null);
  const cardFrontRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const rotateImageRef = useRef<HTMLImageElement>(null);

  const isPlayMode = useSelector((state: State) => state.isPlayMode);

  useEffect(() => {
    const flip = () => cardRef.current?.classList.add(`${styles.flip}`);
    const flipBack = () => cardRef.current?.classList.remove(`${styles.flip}`);
    const play = (event: Event) => {
      const target = event.target as HTMLElement;
      if (
        !target.classList.contains(`${styles['rotate-image']}`) &&
        !isPlayMode
      )
        audioRef.current?.play();
    };

    rotateImageRef.current?.addEventListener('click', flip);
    cardRef.current?.addEventListener('mouseleave', flipBack);
    cardFrontRef.current?.addEventListener('click', play);
    return () => {
      rotateImageRef.current?.removeEventListener('click', flip);
      cardRef.current?.removeEventListener('mouseleave', flipBack);
      cardFrontRef.current?.removeEventListener('click', play);
    };
  }, [isPlayMode]);

  return (
    <div
      className={isPlayMode ? `${styles.card} ${styles.play}` : styles.card}
      ref={cardRef}
    >
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.back}>
            <img
              className={styles.image}
              src={`data:image/jpeg;base64,${image}`}
              alt={card.translate}
            />
            <p className={styles.text}>{translate}</p>
          </div>
          <div className={styles.front} ref={cardFrontRef}>
            <img
              className={styles.image}
              src={`data:image/jpeg;base64,${image}`}
              alt={card.text}
            />
            <p className={styles.text}>{text}</p>
            <audio src={`data:audio/mp3;base64,${audio}`} ref={audioRef} />
            <img
              className={styles['rotate-image']}
              src={rotateIcon}
              alt="rotate"
              ref={rotateImageRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
