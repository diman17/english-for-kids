import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Categories } from '../../types/common';
import { CommonState } from '../../types/store';

const initialState: CommonState = {
  isNavbarShown: false,
  isPlayMode: false,
  categories: [],
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
    enablePlayMode(state: CommonState) {
      state.isPlayMode = true;
    },
    disablePlayMode(state: CommonState) {
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
} = commonSlice.actions;
export default commonSlice.reducer;
