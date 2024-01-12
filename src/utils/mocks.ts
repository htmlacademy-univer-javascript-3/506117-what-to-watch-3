import { datatype, lorem, internet, name, date } from 'faker';
import { Film, FilmDetails, Genre, Promo, Review, SimilarFilm, UserDetails } from '../types/data-types';
import { CommonData, ErrorData, FilmData, State, UserData } from '../types/state';
import { AuthorizationStatus } from '../const';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { createAPI } from '../services/api/api';
import { Token } from '../services/api/token';

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;

export const makeFakeFilm = () => ({
  id: datatype.uuid(),
  genre: lorem.word(),
  name: lorem.sentence(2),
  previewImage: internet.url(),
  previewVideoLink: internet.url()
}) as Film;

export const makeFakeFilmDetails = () => ({
  id: datatype.uuid(),
  backgroundImage: internet.url(),
  description: lorem.paragraph(3),
  director: `${name.firstName()} ${name.lastName()}`,
  genre: lorem.word(),
  isFavorite: new Boolean(Math.random()),
  name: lorem.sentence(2),
  posterImage: internet.url(),
  rating: Math.trunc(5 * Math.random()),
  released: Math.trunc(2000 * (1 + Math.random())),
  runTime: Math.trunc(120 * (1 + Math.random())),
  scoresCount: Math.trunc(20000 * (1 + Math.random())),
  starring: Array.from(
    { length: Math.trunc(5 * (1 + Math.random())) }).map(
    () => `${name.firstName()} ${name.lastName()}`
  ),
  videoLink: internet.url()
}) as FilmDetails;

export const makeFakeGenre = () => ({
  id: datatype.number(10),
  title: lorem.word()
}) as Genre;

export const makeFakePromo = () => ({
  id: datatype.uuid(),
  name: lorem.sentence(2),
  posterImage: internet.url(),
  backgroundImage: internet.url(),
  videoLink: internet.url(),
  genre: lorem.word(),
  released: Math.trunc(2000 * (1 + Math.random())),
  isFavorite: new Boolean(Math.random())
}) as Promo;

export const makeFakeReview = () => ({
  id: datatype.uuid(),
  date: new String(date.recent()),
  comment: lorem.paragraph(5),
  rating: Math.trunc(5 * Math.random()),
  user: internet.userName()
}) as Review;

export const makeFakeSimilarFilm = () => ({
  id: datatype.uuid(),
  name: lorem.sentence(2),
  genre: lorem.word(),
  previewImage: internet.url(),
  previewVideoLink: internet.url()
}) as SimilarFilm;

export const makeFakeUserDetails = () => ({
  avatarUrl: internet.url(),
  email: internet.email(),
  name: internet.userName(),
  token: internet.password()
}) as UserDetails;

export const makeFakeFilmData = () => ({
  filmDetails: makeFakeFilmDetails(),
  similarFilms: Array.from({ length: 3 }).map(() => makeFakeFilm()),
  reviews: Array.from({ length: 5 }).map(() => makeFakeReview()),
  isFilmDetailsLoading: false,
  isSimilarFilmsLoading: false,
  isReviewsLoading: false,
  hasError: false
}) as FilmData;

export const makeEmptyFilmData = () => ({
  filmDetails: null,
  similarFilms: [],
  reviews: [],
  isFilmDetailsLoading: false,
  isSimilarFilmsLoading: false,
  isReviewsLoading: false,
  hasError: false
}) as FilmData;

export const makeFakeCommonData = () => ({
  films: Array.from({ length: 10 }).map(() => makeFakeFilm()),
  promo: makeFakePromo(),
  genre: makeFakeGenre(),
  genreFilms: Array.from({ length: 5 }).map(() => makeFakeFilm()),
  hasError: false,
  isFilmsDataLoading: false,
  isPromoLoading: false
}) as CommonData;

export const makeEmptyCommonData = () => ({
  films: [],
  promo: null,
  genre: { id: 0, title: 'All genres' },
  genreFilms: [],
  hasError: false,
  isFilmsDataLoading: false,
  isPromoLoading: false
}) as CommonData;

export const makeFakeUserData = () => ({
  userDetails: makeFakeUserDetails(),
  authorizationStatus: AuthorizationStatus.Auth,
  favouriteFilms: [],
  favouritePosting: false,
  hasError: false,
  isLoadingData: false,
  loadingFavouriteFilms: false,
  reviewPosting: false
}) as UserData;

export const makeEmptyUserData = () => ({
  authorizationStatus: AuthorizationStatus.Unknown,
  favouriteFilms: [],
  favouritePosting: false,
  hasError: false,
  isLoadingData: false,
  loadingFavouriteFilms: false,
  reviewPosting: false,
  userDetails: {
    avatarUrl: '',
    email: '',
    name: '',
    token: '',
  },
}) as UserData;

export const makeEmptyErrorData = () => ({
  message: '',
  errorType: '',
  details: []
}) as ErrorData;

export const createFakeToken = (): Token => datatype.uuid();

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);
