import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, putGenreFilms } from './action';
import { films } from '../mocks/films';

const initialState = {
  genre: 'All genres',
  films: films.map((film) => film)
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const { newGenre } = action.payload;
      state.genre = newGenre;
    })
    .addCase(putGenreFilms, (state) => {
      if (state.genre === 'All genres') {
        state.films = films.map((film) => film);
      } else {
        state.films = films.filter((film) => film.genre === state.genre);
      }
    });
});
