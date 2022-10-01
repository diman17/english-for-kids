import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cards } from '../../types/common';
import { GameState } from '../../types/store';

const initialState: GameState = {
  isGameStart: false,
  currentCards: [],
  currentCardIndex: 0,
  stars: [],
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame(state: GameState) {
      state.isGameStart = true;
    },
    finishGame(state: GameState) {
      state.isGameStart = false;
      state.currentCardIndex = 0;
      state.stars = [];
    },
    setCurrentCards(state: GameState, action: PayloadAction<Cards>) {
      state.currentCards = action.payload;
    },
    increaseCurrentCard(state: GameState) {
      state.currentCardIndex += 1;
    },
    setStar(state: GameState, action: PayloadAction<boolean>) {
      state.stars.push(action.payload);
    },
  },
});

export const {
  startGame,
  finishGame,
  setCurrentCards,
  increaseCurrentCard,
  setStar,
} = gameSlice.actions;
export default gameSlice.reducer;
