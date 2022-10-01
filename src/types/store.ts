import { Cards, Categories } from './common';

export type CommonState = {
  isNavbarShown: boolean;
  isPlayMode: boolean;
  categories: Categories | [];
};

export type GameState = {
  isGameStart: boolean;
  currentCards: Cards | [];
  currentCardIndex: number;
  stars: boolean[];
  mistakes: number;
  isResultScreenShown: boolean;
};
