import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, loadFilms, putGenreFilms, setFilmsDataLoadingStatus } from './action';
import { InitialState } from '../types/initialState';

const initialState: InitialState = {
  genre: {
    id: 0,
    title: 'All genres'
  },
  films: [],
  genreFilms: [],
  isFilmsDataLoading: false
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
    });
});
