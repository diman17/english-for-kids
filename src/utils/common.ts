import { Card, Cards } from '../types/common';

const getRandomIntegerNumber = (min: number, max: number) =>
  Math.floor(min + Math.random() * (max + 1 - min));

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

export const getRandomKey = () => Date.now() + Math.random();

export const getCountCardsByCategoryId = (cards: Cards, id: number) =>
  cards.filter((card: Card) => card.categoryId === id).length;

export const getCardsByCategoryId = (cards: Cards, id: number) =>
  cards.filter((card: Card) => card.categoryId === id);

export const getRandomImageFromCards = (cards: Cards) => {
  const randomIndex = getRandomIntegerNumber(0, cards.length - 1);
  return cards[randomIndex].image;
};
