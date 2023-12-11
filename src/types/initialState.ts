import { AuthorizationStatus } from '../const';
import { Film } from './film';
import { FilmDetails } from './film-details';
import { Promo } from './promo';
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
    genreFilms: Film[];
    authorizationStatus: AuthorizationStatus;
    isFilmsDataLoading: boolean;
    userError: string | null;
};
