import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/film';

export const changeGenre = createAction<{ newGenre: { id: number; title: string } }>('genre/change');
export const putGenreFilms = createAction('genre/films');
export const loadFilms = createAction<Film[]>('data/loadFilms');
export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');
