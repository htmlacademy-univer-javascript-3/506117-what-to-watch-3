export type MainScreenProps = {
    films: {
        id: string;
        name: string;
        previewImage: string;
        previewVideoLink: string;
        genre: string;
    }[];

    promo: {
        id: string;
        name: string;
        posterImage: string;
        backgroundImage: string;
        videoLink: string;
        genre: string;
        released: number;
        isFavorite: boolean;
    };
}
