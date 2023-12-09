import { AuthorizationStatus } from '../const';
import { Film } from './film';
import { UserData } from './user-data';

export type InitialState = {
    userData: UserData | null;
    genre: {
        id: number;
        title: string;
    };
    films: Film[];
    genreFilms: Film[];
    authorizationStatus: AuthorizationStatus;
    isFilmsDataLoading: boolean;
    userError: string | null;
};
