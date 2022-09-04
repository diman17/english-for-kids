import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Categories } from '../types/main';
import { State } from '../types/store';

const initialState: State = {
  isNavbarShown: false,
  isPlayMode: false,
  categories: [],
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
    setCategories(state: State, action: PayloadAction<Categories>) {
      state.categories = action.payload;
    },
    enablePlayMode(state: State) {
      state.isPlayMode = true;
    },
    disablePlayMode(state: State) {
      state.isPlayMode = false;
    },
  },
});

export const {
  showNavbar,
  hideNavbar,
  setCategories,
  enablePlayMode,
  disablePlayMode,
} = slice.actions;
export default slice.reducer;
