import { AuthorizationStatus } from '../const';
import { DetailMessageType } from './error-type';
import { Film } from './film';
import { FilmDetails } from './film-details';
import { Promo } from './promo';
import { Review } from './reviews';
import { SimilarFilm } from './similar-film';
import { UserData } from './user-data';

export type InitialState = {
    userData: UserData | null;
    genre: {
        id: number;
        title: string;
    };
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
