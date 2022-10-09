import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllCards, getCardsByCategoryId } from '../../api/cards';
import { Cards } from '../../types/common';
import { CardsState } from '../../types/store';

export const fetchCards = createAsyncThunk('users/fetchCards', async () => {
  const response = await getAllCards();
  return response;
});

export const fetchCardsByCategoryId = createAsyncThunk(
  'users/fetchCardsByCategoryId',
  async (categoryId: number) => {
    const response = await getCardsByCategoryId(categoryId);
    return response;
  },
);

const initialState: CardsState = {
  cards: [],
  cardsByCategoryId: [],
  isLoading: false,
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchCards.fulfilled,
      (state, action: PayloadAction<Cards>) => {
        state.isLoading = false;
        state.cards = action.payload;
      },
    );
    builder.addCase(fetchCards.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchCardsByCategoryId.fulfilled,
      (state, action: PayloadAction<Cards>) => {
        state.isLoading = false;
        state.cardsByCategoryId = action.payload;
      },
    );
    builder.addCase(fetchCardsByCategoryId.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export default cardsSlice.reducer;
