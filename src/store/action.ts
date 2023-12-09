import { createAction } from '@reduxjs/toolkit';

export const changeGenre = createAction<{ newGenre: { id: number, title: string } }>('genre/change');
export const putGenreFilms = createAction('genre/films');
