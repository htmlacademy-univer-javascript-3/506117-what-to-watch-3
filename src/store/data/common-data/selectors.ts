import { NameSpace } from '../../../const';
import { Film } from '../../../types/film';
import { Genre } from '../../../types/genre';
import { Promo } from '../../../types/promo';
import { State } from '../../../types/state';

export const getFilms = (state: State): Film[] => state[NameSpace.Data].films;
export const getGenreFilms = (state: State): Film[] => state[NameSpace.Data].genreFilms;
export const getPromo = (state: State): Promo | null => state[NameSpace.Data].promo;
export const getGenre = (state: State): Genre => state[NameSpace.Data].genre;
export const getFilmsLoadingStatus = (state: State): boolean => state[NameSpace.Data].isFilmsDataLoading;
