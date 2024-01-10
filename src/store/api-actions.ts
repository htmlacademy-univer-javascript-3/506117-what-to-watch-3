import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { dropToken, saveToken } from '../services/api/token';
import { AuthData, ReviewData } from '../types/api-types';
import { Film, FilmDetails, Promo, Review, SimilarFilm, UserDetails } from '../types/data-types';

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

export const fetchReviewsAction = createAsyncThunk<Review[], { id: string }, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviewsAction',
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
  async ({ comment: comment, rating: rating, id: id }, { extra: api }) => {
    await api.post(`/comments/${id}`, { comment, rating });
  },
);

export const postFavouriteAction = createAsyncThunk<void, { id: string; status: number }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/add-favourite',
  async ({ id: id, status: status }, { extra: api }) => {
    await api.post(`/favorite/${id}/${status}`);
  },
);

export const checkAuthAction = createAsyncThunk<UserDetails, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    const userData = await api.get<UserDetails>(APIRoute.Login);
    return userData.data;
  },
);

export const loginAction = createAsyncThunk<UserDetails, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password: password }, { extra: api }) => {
    const userData = await api.post<UserDetails>(APIRoute.Login, { email, password });
    saveToken(userData.data.token);
    return userData.data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
