import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, loadFilms, logOut, putGenreFilms, requireAuthorization, saveUserInfo, setFilmsDataLoadingStatus, setUserError } from './action';
import { InitialState } from '../types/initialState';
import { AuthorizationStatus } from '../const';

const initialState: InitialState = {
  userData: null,
  genre: {
    id: 0,
    title: 'All genres'
  },
  films: [],
  genreFilms: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isFilmsDataLoading: false,
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
    .addCase(setFilmsDataLoadingStatus, (state, action) => {
      state.isFilmsDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(logOut, (state) => {
      state.userData = null;
      state.authorizationStatus = AuthorizationStatus.Unknown;
    })
    .addCase(saveUserInfo, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(setUserError, (state, action) => {
      state.userError = action.payload;
    });;
});
