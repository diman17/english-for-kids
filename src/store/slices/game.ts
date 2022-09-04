import { createSlice } from '@reduxjs/toolkit';
import { GameState } from '../../types/store';

const initialState: GameState = {
  isGameStart: false,
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
  },
});

export const { startGame, finishGame } = gameSlice.actions;
export default gameSlice.reducer;
