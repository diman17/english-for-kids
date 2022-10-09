import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCategories } from '../../api/categories';
import { Categories } from '../../types/common';
import { CategoriesState } from '../../types/store';

export const fetchCategories = createAsyncThunk(
  'users/fetchCategories',
  async () => {
    const response = await getCategories();
    return response;
  },
);

const initialState: CategoriesState = {
  categories: [],
  isLoading: false,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchCategories.fulfilled,
      (state, action: PayloadAction<Categories>) => {
        state.isLoading = false;
        state.categories = action.payload;
      },
    );
    builder.addCase(fetchCategories.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export default categoriesSlice.reducer;
