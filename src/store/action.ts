import { createAction } from '@reduxjs/toolkit';

export const changeGenre = createAction<{ newGenre: string }>('genre/change');
export const putGenreFilms = createAction('genre/films');
