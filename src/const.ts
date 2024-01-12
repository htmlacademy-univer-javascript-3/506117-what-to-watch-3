export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id/:tab?',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '*'
}

export enum APIRoute {
  Films = '/films',
  Promo = '/promo',
  Favourite = '/favourite',
  Login = '/login',
  Logout = '/logout',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum NameSpace {
  Data = 'DATA',
  User = 'USER',
  Film = 'FILM',
  Error = 'ERROR'
}

export enum ErrorType {
  Common = 'COMMON_ERROR',
  Validation = 'VALIDATION_ERROR'
}

export enum Rating {
  Bad = 2.0,
  Normal = 4.0,
  Good = 6.0,
  VeryGood = 8.0,
  Awesome = 10.0
}

export const MAX_RATING = 10;
export const SHOW_NUM = 8;
export const TIMEOUT_SHOW_ERROR = 5000;
export const SIMILAR_FILMS_NUM = 4;
export const MiniPlayerConfiguration = {
  muted: true,
  width: 280,
  height: 175,
};
