import { AuthorizationStatus, NameSpace } from '../../../const';
import { Film, UserDetails } from '../../../types/data-types';
import { State } from '../../../types/state';

export const getUserDetails = (state: Pick<State, NameSpace.User>): UserDetails => state[NameSpace.User].userDetails;
export const getAuthorizationStatus = (state: Pick<State, NameSpace.User>): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getFavourites = (state: Pick<State, NameSpace.User>): Film[] => state[NameSpace.User].favouriteFilms;
export const getLoadingDataStatus = (state: Pick<State, NameSpace.User>): boolean => state[NameSpace.User].isLoadingData;
export const getReviewPostingStatus = (state: Pick<State, NameSpace.User>): boolean => state[NameSpace.User].reviewPosting;
export const getFavouritePostingStatus = (state: Pick<State, NameSpace.User>): boolean => state[NameSpace.User].favouritePosting;
export const getLoadingFavouriteStatus = (state: Pick<State, NameSpace.User>): boolean => state[NameSpace.User].loadingFavouriteFilms;
export const getErrorStatus = (state: Pick<State, NameSpace.User>): boolean => state[NameSpace.User].hasError;
