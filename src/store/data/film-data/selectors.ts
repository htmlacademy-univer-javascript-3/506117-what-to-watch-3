import { NameSpace } from '../../../const';
import { FilmDetails } from '../../../types/film-details';
import { Review } from '../../../types/reviews';
import { SimilarFilm } from '../../../types/similar-film';
import { State } from '../../../types/state';

export const getFilmDetails = (state: Pick<State, NameSpace.Film>): FilmDetails | null => state[NameSpace.Film].filmDetails;
export const getSimilarFilms = (state: Pick<State, NameSpace.Film>): SimilarFilm[] => state[NameSpace.Film].similarFilms;
export const getReviews = (state: Pick<State, NameSpace.Film>): Review[] => state[NameSpace.Film].reviews;
export const getReviewsLoadingStatus = (state: Pick<State, NameSpace.Film>): boolean => state[NameSpace.Film].isReviewsLoading;
export const getSimilarFilmsLoadingStatus = (state: Pick<State, NameSpace.Film>): boolean => state[NameSpace.Film].isSimilarFilmsLoading;
export const getFilmDetailsLoadingStatus = (state: Pick<State, NameSpace.Film>): boolean => state[NameSpace.Film].isFilmDetailsLoading;
export const getErrorDataStatus = (state: Pick<State, NameSpace.Film>): boolean => state[NameSpace.Film].hasError;
