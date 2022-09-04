import { Categories } from './main';

export type State = {
  isNavbarShown: boolean;
  isPlayMode: boolean;
  categories: Categories | [];
};
