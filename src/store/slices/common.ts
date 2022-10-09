import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Card, Cards, Categories, Category } from '../../types/common';
import { CommonState } from '../../types/store';

const initialState: CommonState = {
  isNavbarShown: false,
  isPlayMode: false,
  categories: [],
  cards: [],
  isLoginModalShown: false,
  admin: {
    login: 'admin',
    password: 'englishforkids',
  },
  isAdminAuth: false,
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    showNavbar(state: CommonState) {
      state.isNavbarShown = true;
    },
    hideNavbar(state: CommonState) {
      state.isNavbarShown = false;
    },
    setCategories(state: CommonState, action: PayloadAction<Categories>) {
      state.categories = action.payload;
    },
    updateCategories(state: CommonState, action: PayloadAction<Category>) {
      const index = state.categories.findIndex(
        (category) => category.id === action.payload.id,
      );
      state.categories.splice(index, 1, action.payload);
    },
    setCards(state: CommonState, action: PayloadAction<Cards>) {
      state.cards = action.payload;
    },
    updateCards(state: CommonState, action: PayloadAction<Card>) {
      const index = state.cards.findIndex(
        (card) => card.id === action.payload.id,
      );
      state.cards.splice(index, 1, action.payload);
    },
    enablePlayMode(state: CommonState) {
      state.isPlayMode = true;
    },
    disablePlayMode(state: CommonState) {
      state.isPlayMode = false;
    },
    showLoginModal(state: CommonState) {
      state.isLoginModalShown = true;
    },
    hideLoginModal(state: CommonState) {
      state.isLoginModalShown = false;
    },
    logInAdmin(state: CommonState) {
      state.isAdminAuth = true;
    },
    logOutAdmin(state: CommonState) {
      state.isAdminAuth = false;
    },
  },
});

export const {
  showNavbar,
  hideNavbar,
  setCategories,
  updateCategories,
  setCards,
  updateCards,
  enablePlayMode,
  disablePlayMode,
  showLoginModal,
  hideLoginModal,
  logInAdmin,
  logOutAdmin,
} = commonSlice.actions;
export default commonSlice.reducer;
