import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { Film, FilmDetails, Genre, Promo, Review, SimilarFilm, UserDetails } from './data-types';


export type CommonData = {
    genre: Genre;
    films: Film[];
    promo: Promo | null;
    genreFilms: Film[];
    isFilmsDataLoading: boolean;
    isPromoLoading: boolean;
    hasError: boolean;
}

export type FilmData = {
    filmDetails: FilmDetails | null;
    similarFilms: SimilarFilm[];
    reviews: Review[];
    isFilmDetailsLoading: boolean;
    isSimilarFilmsLoading: boolean;
    isReviewsLoading: boolean;
    hasError: boolean;
}

export type UserData = {
    userDetails: UserDetails;
    favouriteFilms: Film[];
    authorizationStatus: AuthorizationStatus;
    isLoadingData: boolean;
    reviewPosting: boolean;
    loadingFavouriteFilms: boolean;
    favouritePosting: boolean;
    hasError: boolean;
}

export type ErrorData = {
    errorType: string;
    message: string;
    details: ErrorDetails[];
}

export type ErrorDetails = {
    property: string;
    value: string;
    messages: string[];
}


export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
