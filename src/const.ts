export const Info = {
  promoInfo: {
    name: 'The Grand Budapest Hotel',
    genre: 'Drama',
    releaseDate: new Date('2014'),
    posterPath: 'img/the-grand-budapest-hotel-poster.jpg',
    backgroundPath: 'img/bg-the-grand-budapest-hotel.jpg',
  },

  filmsInfo: [
    {
      id: 0,
      name: 'The Grand Budapest Hotel',
      imagePath: 'img/the-grand-budapest-hotel-poster.jpg'
    }
  ],

  userInfo: {
    listCount: 9,
    isInList: false
  },

  moreLikeThis: [{name: 'Bohemian Rapsody', id: 1, imagePath: 'public/img/bohemian-rhapsody.jpg'}],
  rating: {
    mark: 10,
    level: 'Really good',
    rateCount: 250
  },

  movieInfo: {
    name: 'Grand Budapest',
    genre: 'Drama',
    releaseDate: new Date('2014'),
    posterPath: 'public/img/bg-the-grand-budapest-hotel.jpg',
    backgroundPath: 'public/img/the-grand-budapest-hotel-poster.jpg',

    movieOverview: {
      description: 'Some smart description.',
      director: 'Big man',
      starring: ['Richard', 'Merry', 'Kevin', 'John'],
    },
    runTime: '10 min',
  },

  reviewsInfo: [{
    id: 0,
    text: 'zero comment',
    author: 'zero',
    rating: 0,
    date: new Date('2014'),

  }],
};

export const Genres = [
  { name: 'All genres', id: 0 }, { name: 'Comedies', id: 1 },
  { name: 'Crime', id: 2 }, { name: 'Documentary', id: 3 },
  { name: 'Dramas', id: 4 }, { name: 'Horor', id: 5 },
  { name: 'Kids & Family', id: 6 }, { name: 'Romance', id: 7 },
  { name: 'Sci-Fi', id: 8 }, { name: 'Thrillers', id: 9 }
];

export const MoviePageProps = {
  movieInfo: {
    name: 'Grand Budapest',
    genre: 'Drama',
    releaseDate: new Date('2014'),
    posterPath: 'public/img/bg-the-grand-budapest-hotel.jpg',
    backgroundPath: 'public/img/the-grand-budapest-hotel-poster.jpg',
    description: 'Some smart description.',
    director: 'Big man',
    starring: ['Richard', 'Merry', 'Kevin', 'John']
  },

  moreLikeThis: [{name: 'Bohemian Rapsody', id: 1, imagePath: 'public/img/bohemian-rhapsody.jpg'}],
  rating: {
    mark: 10,
    level: 'Really good',
    rateCount: 250
  },
  userInfo: {
    listCount: 9
  }
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

