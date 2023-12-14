import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { Film } from '../types/film';
import { AuthData } from '../types/auth-data';
import { APIRoute, AppRoute, TIMEOUT_SHOW_ERROR } from '../const';
import { dropToken, saveToken } from '../services/api/token';
import { Promo } from '../types/promo';
import { FilmDetails } from '../types/film-details';
import { SimilarFilm } from '../types/similar-film';
import { Review } from '../types/reviews';
import { ReviewData } from '../types/review-data';
import { UserDetails } from '../types/user-details';
import { redirectToRoute } from './action';
import { setErrorData } from './data/error-data/error-data';

export const clearErrorAction = createAsyncThunk<void, { dispatch: AppDispatch }>(
  'error/clearError',
  ({ dispatch }) => {
    setTimeout(
      () => dispatch(setErrorData([])),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchFilmsAction = createAsyncThunk<Film[], undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Film[]>('/films');
    return data;
  },
);

export const fetchPromoAction = createAsyncThunk<Promo, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPromo',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Promo>('/promo');
    return data;
  },
);

export const fetchFilmDetailsAction = createAsyncThunk<FilmDetails, { id: string }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilmDetails',
  async ({ id }, { extra: api }) => {
    const { data } = await api.get<FilmDetails>(`/films/${id}`);
    return data;
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<SimilarFilm[], { id: string }, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSimilarFilms',
  async ({ id }, { extra: api }) => {
    const { data } = await api.get<SimilarFilm[]>(`/films/${id}/similar`);
    return data;
  },
);

export const fetchFavouriteFilmsAction = createAsyncThunk<Film[], undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavouriteFilms',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Film[]>('/favorite');
    return data;
  },
);

export const fetchReviews = createAsyncThunk<Review[], { id: string }, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async ({ id }, { extra: api }) => {
    const { data } = await api.get<Review[]>(`/comments/${id}`);
    return data;
  },
);

export const postReviewAction = createAsyncThunk<void, ReviewData & { id: string }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/review',
  async ({ comment: comment, rating: rating, id: id }, { dispatch, extra: api }) => {
    await api.post(`/comments/${id}`, { comment, rating });
    dispatch(redirectToRoute(`/films/${id}`));
  },
);

export const postFavouriteAction = createAsyncThunk<void, { id: string; status: number }, {
  state: State;
  extra: AxiosInstance;
}>(
  'user/add-favourite',
  async ({ id: id, status: status }, { extra: api }) => {
    await api.post(`/favorite/${id}/${status}`);
  },
);

export const loginAction = createAsyncThunk<UserDetails, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password: password }, { dispatch, extra: api }) => {
    const userData = await api.post<UserDetails>(APIRoute.Login, { email, password });
    saveToken(userData.data.token);
    dispatch(redirectToRoute(AppRoute.Main));
    return userData.data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
