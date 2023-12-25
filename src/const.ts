export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
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

export const filmCardVideoProps = {
  muted: true,
  width: 280,
  height: 175
};

export const SHOW_NUM = 8;
export const TIMEOUT_SHOW_ERROR = 5000;
export const SIMILAR_FILMS_NUM = 4;
