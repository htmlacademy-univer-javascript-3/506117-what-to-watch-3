import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { DetailMessageType } from './error-type';
import { Film } from './film';
import { FilmDetails } from './film-details';
import { Genre } from './genre';
import { Promo } from './promo';
import { Review } from './reviews';
import { SimilarFilm } from './similar-film';
import { UserData } from './user-data';

export type InitialState = {
    userData: UserData | null;
    genre: Genre;
    films: Film[];
    promo: Promo | null;
    filmDetails: FilmDetails | null;
    similarFilms: SimilarFilm[];
    reviews: Review[];
    genreFilms: Film[];
    authorizationStatus: AuthorizationStatus;
    isDataLoading: boolean;
    userError: DetailMessageType | null;
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
