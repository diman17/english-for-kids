import { createSlice } from '@reduxjs/toolkit';
import { State } from '../types/store';

const initialState: State = {
  isNavbarShown: false,
};

const slice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    showNavbar(state: State) {
      state.isNavbarShown = true;
    },
    hideNavbar(state: State) {
      state.isNavbarShown = false;
    },
  },
});

export const { showNavbar, hideNavbar } = slice.actions;
export default slice.reducer;
