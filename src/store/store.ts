import { configureStore } from '@reduxjs/toolkit';
import commonReducer from './slices/common';
import gameReducer from './slices/game';
import categoriesReducer from './slices/categories';
import cardsReducer from './slices/cards';

const store = configureStore({
  reducer: {
    common: commonReducer,
    game: gameReducer,
    categories: categoriesReducer,
    cards: cardsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
