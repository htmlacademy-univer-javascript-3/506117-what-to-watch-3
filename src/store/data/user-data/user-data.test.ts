import { describe } from 'vitest';
import { AuthorizationStatus } from '../../../const';
import { userData } from './user-data';
import { fetchFavouriteFilmsAction, loginAction, postFavouriteAction, postReviewAction } from '../../api-actions';
import { makeEmptyUserData, makeFakeFilm, makeFakeUserData } from '../../../utils/mocks';
import { internet } from 'faker';

describe('user-data slice', () => {
  it('should return initial state with empty action', () => {
    const expectedState = makeFakeUserData();
    const emptyAction = { type: '' };
    const result = userData.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const expectedState = makeEmptyUserData();
    const emptyAction = { type: '' };
    const result = userData.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should set "isLoadingData" to "true", "hasError" to "false" with "loginAction.pending"', () => {
    const expectedState = { ...makeEmptyUserData(), hasError: false, isLoadingData: true };
    const result = userData.reducer(undefined, loginAction.pending);
    expect(result).toEqual(expectedState);
  });

  it('should set "reviewPosting" to "true", "hasError" to "false" with "postReviewAction.pending"', () => {
    const expectedState = { ...makeFakeUserData(), hasError: false, reviewPosting: true };
    const result = userData.reducer(expectedState, postReviewAction.pending);
    expect(result).toEqual(expectedState);
  });

  it('should set "favouritePosting" to "true", "hasError" to "false" with "postFavouriteAction.pending"', () => {
    const expectedState = { ...makeFakeUserData(), hasError: false, favouritePosting: true };
    const result = userData.reducer({ ...expectedState, hasError: false, favouritePosting: false }, postFavouriteAction.pending);
    expect(result).toEqual(expectedState);
  });

  it('should set "loadingFavouriteFilms" to "true", "hasError" to "false" with "fetchFavouriteFilmsAction.pending"', () => {
    const expectedState = { ...makeFakeUserData(), hasError: false, loadingFavouriteFilms: true };
    const result = userData.reducer({ ...expectedState, hasError: false, loadingFavouriteFilms: false }, fetchFavouriteFilmsAction.pending);
    expect(result).toEqual(expectedState);
  });

  it('should set "userDetails", "isLoadingData" to "false", "authorizationStatus" to "Auth" with "loginAction.fulfilled"', () => {
    const expectedState = { ...makeFakeUserData(), authorizationStatus: AuthorizationStatus.Auth };
    const result = userData.reducer(
      undefined,
      loginAction.fulfilled(expectedState.userDetails, '', { login: internet.email(), password: internet.password() })
    );
    expect(result).toEqual(expectedState);
  });

  it('should set "reviewPosting" to "false", "hasError" to "false" with "postReviewAction.fulfilled"', () => {
    const expectedState = { ...makeFakeUserData(), hasError: false, reviewPosting: false };
    const result = userData.reducer(expectedState, postReviewAction.fulfilled);
    expect(result).toEqual(expectedState);
  });

  it('should set "favouritePosting" to "false", "hasError" to "false" with "postFavouriteAction.fulfilled"', () => {
    const expectedState = { ...makeFakeUserData(), hasError: false, favouritePosting: false };
    const result = userData.reducer(expectedState, postFavouriteAction.fulfilled);
    expect(result).toEqual(expectedState);
  });

  it('should set "favouriteFilms" with "fetchFavouriteFilmsAction.fulfilled"', () => {
    const expectedState = { ...makeFakeUserData(), authorizationStatus: AuthorizationStatus.Auth, loadingFavouriteFilms: false };

    const result = userData.reducer(
      {...expectedState, favouriteFilms: Array.from({ length: 10 }).map(() => makeFakeFilm())},
      fetchFavouriteFilmsAction.fulfilled(expectedState.favouriteFilms, '', undefined)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "isLoadingData" to "false", "hasError" to "true" with "loginAction.rejected', () => {
    const expectedState = { ...makeEmptyUserData(), isLoadingData: false, hasError: true, authorizationStatus: AuthorizationStatus.NoAuth };
    const result = userData.reducer({ ...makeEmptyUserData(), isLoadingData: true, hasError: false, authorizationStatus: AuthorizationStatus.NoAuth }, loginAction.rejected);
    expect(result).toEqual(expectedState);
  });

  it('should set "reviewPosting" to "false", "hasError" to "true" with "postReviewAction.rejected', () => {
    const expectedState = { ...makeFakeUserData(), reviewPosting: false, hasError: true };
    const result = userData.reducer({ ...expectedState, reviewPosting: true, hasError: false }, postReviewAction.rejected);
    expect(result).toEqual(expectedState);
  });

  it('should set "favouritePosting" to "false", "hasError" to "true" with "postFavouriteAction.rejected', () => {
    const expectedState = { ...makeFakeUserData(), favouritePosting: false, hasError: true };
    const result = userData.reducer({ ...expectedState, favouritePosting: true, hasError: false }, postFavouriteAction.rejected);
    expect(result).toEqual(expectedState);
  });

  it('should set "loadingFavouriteFilms" to "false", "hasError" to "true" with "fetchFavouriteFilmsAction.rejected', () => {
    const expectedState = { ...makeFakeUserData(), loadingFavouriteFilms: false, hasError: true };
    const result = userData.reducer({ ...expectedState, loadingFavouriteFilms: true, hasError: false }, fetchFavouriteFilmsAction.rejected);
    expect(result).toEqual(expectedState);
  });
});
