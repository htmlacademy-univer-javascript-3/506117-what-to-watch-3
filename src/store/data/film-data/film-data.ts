import { createSlice } from '@reduxjs/toolkit';
import { FilmData } from '../../../types/state';
import { NameSpace } from '../../../const';
import { fetchFilmDetailsAction, fetchReviewsAction, fetchSimilarFilmsAction } from '../../api-actions';

const initialState: FilmData = {
  filmDetails: null,
  similarFilms: [],
  reviews: [],
  isFilmDetailsLoading: false,
  isSimilarFilmsLoading: false,
  isReviewsLoading: false,
  hasError: false
};

export const filmData = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmDetailsAction.pending, (state) => {
        state.isFilmDetailsLoading = true;
        state.hasError = false;
      })
      .addCase(fetchFilmDetailsAction.fulfilled, (state, action) => {
        state.filmDetails = action.payload;
        state.isFilmDetailsLoading = false;
      })
      .addCase(fetchFilmDetailsAction.rejected, (state) => {
        state.isFilmDetailsLoading = false;
        state.hasError = true;
      })
      .addCase(fetchSimilarFilmsAction.pending, (state) => {
        state.isSimilarFilmsLoading = true;
        state.hasError = false;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
        state.isSimilarFilmsLoading = false;
      })
      .addCase(fetchSimilarFilmsAction.rejected, (state) => {
        state.isSimilarFilmsLoading = false;
        state.hasError = true;
      })
      .addCase(fetchReviewsAction.pending, (state) => {
        state.isReviewsLoading = true;
        state.hasError = false;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isReviewsLoading = false;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.isReviewsLoading = false;
        state.hasError = true;
      });
  }
});
