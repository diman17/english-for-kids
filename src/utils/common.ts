import { Card, Cards } from '../types/common';

export const shuffle = <T>(arr: T[]) => {
  const array = [...arr];
  if (array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  return array;
};

export const playAudio = (audioPath: string, delay: number = 200) => {
  setTimeout(() => {
    const audio = new Audio(audioPath);
    audio.play();
  }, delay);
};

export const getCountCardsByCategoryId = (cards: Cards, id: number) =>
  cards.filter((card: Card) => card.categoryId === id).length;

export const getCardsByCategoryId = (cards: Cards, id: number) =>
  cards.filter((card: Card) => card.categoryId === id);

export const getImageFromCards = (cards: Cards) => cards[0].image;
