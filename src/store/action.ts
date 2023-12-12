import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/film';
import { AppRoute, AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';
import { Promo } from '../types/promo';
import { FilmDetails } from '../types/film-details';
import { DetailMessageType } from '../types/error-type';

export const changeGenre = createAction<{ newGenre: { id: number; title: string } }>('genre/change');
export const putGenreFilms = createAction('genre/films');

export const loadFilms = createAction<Film[]>('data/loadFilms');
export const loadPromo = createAction<Promo>('data/loadPromo');
export const loadFilmDetails = createAction<FilmDetails>('data/loadFilmDetails');
export const loadSimilarFilms = createAction<SimilarFilms>('data/loadSimilarFilms');
export const loadReviews = createAction<Reviews>('data/loadReviews');
export const setDataLoadingStatus = createAction<boolean>('data/setDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const redirectToRoute = createAction<AppRoute>('main/redirectToRoute');
export const saveUserInfo = createAction<UserData>('user/saveInfo');
export const setUserError = createAction<DetailMessageType | null>('user/error');