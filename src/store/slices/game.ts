import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cards } from '../../types/common';
import { GameState } from '../../types/store';

const initialState: GameState = {
  isGameStart: false,
  currentCards: [],
  currentCardIndex: 0,
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
    },
    setCurrentCards(state: GameState, action: PayloadAction<Cards>) {
      state.currentCards = action.payload;
    },
    increaseCurrentCard(state: GameState) {
      state.currentCardIndex += 1;
    },
  },
});

export const { startGame, finishGame, setCurrentCards, increaseCurrentCard } =
  gameSlice.actions;
export default gameSlice.reducer;
