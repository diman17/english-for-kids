import { configureStore } from '@reduxjs/toolkit';
import commonReducer from './slices/common';
import gameReducer from './slices/game';

const store = configureStore({
  reducer: {
    common: commonReducer,
    game: gameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
