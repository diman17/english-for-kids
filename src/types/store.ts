import { hideNavbar, showNavbar } from '../store/actions';

export type State = {
  isNavbarShown: boolean;
};

export type Actions =
  | ReturnType<typeof showNavbar>
  | ReturnType<typeof hideNavbar>;
