import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { Film } from '../types/film';
import { loadFilms, setFilmsDataLoadingStatus } from './action';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'data/fetchFilms',
    async (_arg, {dispatch, extra: api}) => {
      dispatch(setFilmsDataLoadingStatus(true));
      const {data} = await api.get<Film[]>('/films');
      dispatch(setFilmsDataLoadingStatus(false));
      dispatch(loadFilms(data));
    },
  );
