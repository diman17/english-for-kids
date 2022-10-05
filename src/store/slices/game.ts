import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cards } from '../../types/common';
import { GameState } from '../../types/store';

const initialState: GameState = {
  isGameStart: false,
  currentCards: [],
  currentCardIndex: 0,
  stars: [],
  mistakes: 0,
  isResultScreenShown: false,
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
    },
    setCurrentCards(state: GameState, action: PayloadAction<Cards>) {
      state.currentCards = action.payload;
    },
    increaseCurrentCard(state: GameState) {
      state.currentCardIndex += 1;
    },
    resetCurrentCard(state: GameState) {
      state.currentCardIndex = 0;
    },
    setStar(state: GameState, action: PayloadAction<boolean>) {
      state.stars.unshift(action.payload);
    },
    resetStars(state: GameState) {
      state.stars = [];
    },
    increaseMistakes(state: GameState) {
      state.mistakes += 1;
    },
    resetMistakes(state: GameState) {
      state.mistakes = 0;
    },
    setIsResultScreenShown(state: GameState, action: PayloadAction<boolean>) {
      state.isResultScreenShown = action.payload;
    },
  },
});

export const {
  startGame,
  finishGame,
  setCurrentCards,
  resetCurrentCard,
  increaseCurrentCard,
  setStar,
  resetStars,
  increaseMistakes,
  resetMistakes,
  setIsResultScreenShown,
} = gameSlice.actions;
export default gameSlice.reducer;
