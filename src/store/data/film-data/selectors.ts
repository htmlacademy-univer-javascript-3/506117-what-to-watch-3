import { NameSpace } from '../../../const';
import { FilmDetails } from '../../../types/film-details';
import { Review } from '../../../types/reviews';
import { SimilarFilm } from '../../../types/similar-film';
import { State } from '../../../types/state';

export const getFilmDetails = (state: State): FilmDetails | null => state[NameSpace.Film].filmDetails;
export const getSimilarFilms = (state: State): SimilarFilm[] => state[NameSpace.Film].similarFilms;
export const getReviews = (state: State): Review[] => state[NameSpace.Film].reviews;
