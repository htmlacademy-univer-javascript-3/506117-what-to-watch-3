import { NameSpace } from '../../../const';
import { Film, Genre, Promo } from '../../../types/data-types';
import { State } from '../../../types/state';

export const getFilms = (state: Pick<State, NameSpace.Data>): Film[] => state[NameSpace.Data].films;
export const getGenreFilms = (state: Pick<State, NameSpace.Data>): Film[] => state[NameSpace.Data].genreFilms;
export const getPromo = (state: Pick<State, NameSpace.Data>): Promo | null => state[NameSpace.Data].promo;
export const getGenre = (state: Pick<State, NameSpace.Data>): Genre => state[NameSpace.Data].genre;
export const getFilmsLoadingStatus = (state: Pick<State, NameSpace.Data>): boolean => state[NameSpace.Data].isFilmsDataLoading;
export const getPromoLoadingStatus = (state: Pick<State, NameSpace.Data>): boolean => state[NameSpace.Data].isPromoLoading;
export const getErrorDataStatus = (state: Pick<State, NameSpace.Data>): boolean => state[NameSpace.Data].hasError;
