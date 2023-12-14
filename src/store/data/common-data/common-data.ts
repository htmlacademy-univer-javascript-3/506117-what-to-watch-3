import { createSlice } from '@reduxjs/toolkit';
import { CommonData } from '../../../types/state';
import { NameSpace } from '../../../const';
import { fetchFilmsAction, fetchPromoAction } from '../../api-actions';

const initialState: CommonData = {
  films: [],
  genre: {
    id: 0,
    title: 'All genres'
  },
  genreFilms: [],
  promo: null,
  isFilmsDataLoading: false,
  isPromoLoading: false,
  hasError: false
};

export const commonData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    putGenreFilms: (state) => {
      if (state.genre.id === 0) {
        state.genreFilms = state.films.map((film) => film);
      } else {
        state.genreFilms = state.films.filter((film) => film.genre === state.genre.title);
      }
    },
    changeGenre: (state, action: {type: string; payload: CommonData }) => {
      state.genre = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isFilmsDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isFilmsDataLoading = false;
      })
      .addCase(fetchFilmsAction.rejected, (state) => {
        state.isFilmsDataLoading = false;
        state.hasError = true;
      })
      .addCase(fetchPromoAction.pending, (state) => {
        state.isPromoLoading = true;
        state.hasError = false;
      })
      .addCase(fetchPromoAction.fulfilled, (state, action) => {
        state.promo = action.payload;
        state.isPromoLoading = false;
      })
      .addCase(fetchPromoAction.rejected, (state) => {
        state.isPromoLoading = false;
        state.hasError = true;
      });
  }
});

export const { putGenreFilms, changeGenre } = commonData.actions;
