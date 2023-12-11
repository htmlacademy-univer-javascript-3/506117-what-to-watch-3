import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { Film } from '../types/film';
import { loadFilmDetails, loadFilms, loadPromo, redirectToRoute, requireAuthorization, saveUserInfo, setFilmsDataLoadingStatus, setUserError } from './action';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { APIRoute, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { dropToken, saveToken } from '../services/token';
import { store } from '.';
import { Promo } from '../types/promo';
import { FilmDetails } from '../types/film-details';

export const clearErrorAction = createAsyncThunk(
  'game/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setUserError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setFilmsDataLoadingStatus(true));
    const { data } = await api.get<Film[]>('/films');
    dispatch(setFilmsDataLoadingStatus(false));
    dispatch(loadFilms(data));
  },
);

export const fetchPromoAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPromo',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setFilmsDataLoadingStatus(true));
    const { data } = await api.get<Promo>('/promo');
    dispatch(setFilmsDataLoadingStatus(false));
    dispatch(loadPromo(data));
  },
);

export const fetchFilmDetailsAction = createAsyncThunk<void, {id : string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilmDetails',
  async ({ id }, { dispatch, extra: api }) => {
    dispatch(setFilmsDataLoadingStatus(true));
    const { data } = await api.get<FilmDetails>(`/films/${id}`);
    dispatch(setFilmsDataLoadingStatus(false));
    dispatch(loadFilmDetails(data));
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password: password }, { dispatch, extra: api }) => {
    const userData = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(userData.data.token);
    dispatch(saveUserInfo(userData.data));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.Unknown));
  },
);
