import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, loadFilmDetails, loadFilms, loadPromo, loadReviews, loadSimilarFilms, putGenreFilms, requireAuthorization, saveUserInfo, setDataLoadingStatus, setUserError } from './action';

import { AuthorizationStatus } from '../const';
import { InitialState } from '../types/state';

const initialState: InitialState = {
  userData: null,
  genre: {
    id: 0,
    title: 'All genres'
  },
  films: [],
  promo: null,
  filmDetails: null,
  similarFilms: [],
  reviews: [],
  genreFilms: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoading: false,
  userError: null
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const { newGenre } = action.payload;
      state.genre = newGenre;
    })
    .addCase(putGenreFilms, (state) => {
      if (state.genre.id === 0) {
        state.genreFilms = state.films.map((film) => film);
      } else {
        state.genreFilms = state.films.filter((film) => film.genre === state.genre.title);
      }
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(loadPromo, (state, action) => {
      state.promo = action.payload;
    })
    .addCase(loadFilmDetails, (state, action) => {
      state.filmDetails = action.payload;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(saveUserInfo, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(setUserError, (state, action) => {
      state.userError = action.payload;
    });
});
