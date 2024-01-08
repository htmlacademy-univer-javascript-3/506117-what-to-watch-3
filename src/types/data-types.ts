export type Film = {
    id: string;
    name: string;
    previewImage: string;
    previewVideoLink: string;
    genre: string;
};

export type FilmDetails = {
    id: string;
    name: string;
    posterImage: string;
    backgroundImage: string;
    videoLink: string;
    description: string;
    rating: number;
    scoresCount: number;
    director: string;
    starring: string[];
    runTime: number;
    genre: string;
    released: number;
    isFavorite: boolean;
}

export type Genre = {
    id: number;
    title: string;
};

export type Promo = {
    id: string;
    name: string;
    posterImage: string;
    backgroundImage: string;
    videoLink: string;
    genre: string;
    released: number;
    isFavorite: boolean;
}

export type Review = {
    id: string;
    date: string;
    user: string;
    comment: string;
    rating: number;
}

export type SimilarFilm = {
    id: string;
    name: string;
    previewImage: string;
    previewVideoLink: string;
    genre: string;
}

export type UserDetails = {
    avatarUrl: string;
    email: string;
    name: string;
    token: string;
}
