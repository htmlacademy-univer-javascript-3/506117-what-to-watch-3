import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/film';
import { AppRoute, AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';

export const changeGenre = createAction<{ newGenre: { id: number; title: string } }>('genre/change');
export const putGenreFilms = createAction('genre/films');

export const loadFilms = createAction<Film[]>('data/loadFilms');
export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const redirectToRoute = createAction<AppRoute>('main/redirectToRoute');
export const saveUserInfo = createAction<UserData>('user/saveInfo');
export const setUserError = createAction<string | null>('user/error');