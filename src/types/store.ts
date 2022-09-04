import { Categories } from './common';

export type CommonState = {
  isNavbarShown: boolean;
  isPlayMode: boolean;
  categories: Categories | [];
};

export type GameState = {
  isGameStart: boolean;
};
