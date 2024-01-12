import { describe } from 'vitest';
import { NameSpace } from '../../../const';
import { getAuthorizationStatus, getErrorStatus, getFavouritePostingStatus, getFavourites, getLoadingDataStatus, getLoadingFavouriteStatus, getReviewPostingStatus, getUserDetails } from './selectors';
import { makeFakeUserData } from '../../../utils/mocks';

describe('user-data selectors', () => {
  it('should return userDetails from state', () => {
    const state = {
      [NameSpace.User]: makeFakeUserData()
    };

    const { userDetails } = state[NameSpace.User];
    const result = getUserDetails(state);

    expect(result).toEqual(userDetails);
  });

  it('should return favouriteFilms from state', () => {
    const state = {
      [NameSpace.User]: makeFakeUserData()
    };

    const { favouriteFilms } = state[NameSpace.User];
    const result = getFavourites(state);

    expect(result).toEqual(favouriteFilms);
  });

  it('should return authorizationStatus from state', () => {
    const state = {
      [NameSpace.User]: makeFakeUserData()
    };

    const { authorizationStatus } = state[NameSpace.User];
    const result = getAuthorizationStatus(state);

    expect(result).toBe(authorizationStatus);
  });

  it('should return loading data status from state', () => {
    const state = {
      [NameSpace.User]: makeFakeUserData()
    };

    const { isLoadingData } = state[NameSpace.User];
    const result = getLoadingDataStatus(state);

    expect(result).toBe(isLoadingData);
  });

  it('should return review posting status from state', () => {
    const state = {
      [NameSpace.User]: makeFakeUserData()
    };

    const { reviewPosting } = state[NameSpace.User];
    const result = getReviewPostingStatus(state);

    expect(result).toBe(reviewPosting);
  });

  it('should return favourite posting status from state', () => {
    const state = {
      [NameSpace.User]: makeFakeUserData()
    };

    const { favouritePosting } = state[NameSpace.User];
    const result = getFavouritePostingStatus(state);

    expect(result).toBe(favouritePosting);
  });

  it('should return loading favourite films status from state', () => {
    const state = {
      [NameSpace.User]: makeFakeUserData()
    };

    const { loadingFavouriteFilms } = state[NameSpace.User];
    const result = getLoadingFavouriteStatus(state);

    expect(result).toBe(loadingFavouriteFilms);
  });

  it('should return error status from state', () => {
    const state = {
      [NameSpace.User]: makeFakeUserData()
    };

    const { hasError } = state[NameSpace.User];
    const result = getErrorStatus(state);

    expect(result).toBe(hasError);
  });
});
