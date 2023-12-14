import { AuthorizationStatus, NameSpace } from '../../../const';
import { Film } from '../../../types/film';
import { State } from '../../../types/state';
import { UserDetails } from '../../../types/user-details';

export const getUserDetails = (state: State): UserDetails => state[NameSpace.User].userDetails;
export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getFavourites = (state: State): Film[] => state[NameSpace.User].favouriteFilms;
