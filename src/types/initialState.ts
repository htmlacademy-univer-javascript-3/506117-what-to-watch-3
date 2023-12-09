import { Film } from './film';

export type InitialState = {
    genre: {
        id: number;
        title: string;
    };
    films: Film[];
    genreFilms: Film[];
    isFilmsDataLoading: boolean;
};
