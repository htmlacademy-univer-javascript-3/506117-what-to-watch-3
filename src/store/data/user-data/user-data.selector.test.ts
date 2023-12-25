import { describe } from 'vitest';
import { AuthorizationStatus, NameSpace } from '../../../const';
import { mockFilms } from '../../../utils/mocks/films';
import { getAuthorizationStatus, getErrorStatus, getFavouritePostingStatus, getFavourites, getLoadingDataStatus, getLoadingFavouriteStatus, getReviewPostingStatus, getUserDetails } from './selectors';

describe('user-data selectors', () => {
  const state = {
    [NameSpace.User]: {
      userDetails: {
        avatarUrl: '/ddddd',
        email: 'aaa@aaa',
        name: 'name',
        token: '3213FKL:Sdkd'
      },
      favouriteFilms: mockFilms.slice(1, 3),
      authorizationStatus: AuthorizationStatus.Auth,
      isLoadingData: false,
      reviewPosting: false,
      favouritePosting: false,
      loadingFavouriteFilms: false,
      hasError: false
    }
  };

  it('should return userDetails from state', () => {
    const { userDetails } = state[NameSpace.User];
    const result = getUserDetails(state);

    expect(result).toEqual(userDetails);
  });

  it('should return favouriteFilms from state', () => {
    const { favouriteFilms } = state[NameSpace.User];
    const result = getFavourites(state);

    expect(result).toEqual(favouriteFilms);
  });

  it('should return authorizationStatus from state', () => {
    const { authorizationStatus } = state[NameSpace.User];
    const result = getAuthorizationStatus(state);

    expect(result).toBe(authorizationStatus);
  });

  it('should return loading data status from state', () => {
    const { isLoadingData } = state[NameSpace.User];
    const result = getLoadingDataStatus(state);

    expect(result).toBe(isLoadingData);
  });

  it('should return review posting status from state', () => {
    const { reviewPosting } = state[NameSpace.User];
    const result = getReviewPostingStatus(state);

    expect(result).toBe(reviewPosting);
  });

  it('should return favourite posting status from state', () => {
    const { favouritePosting } = state[NameSpace.User];
    const result = getFavouritePostingStatus(state);

    expect(result).toBe(favouritePosting);
  });

  it('should return loading favourite films status from state', () => {
    const { loadingFavouriteFilms } = state[NameSpace.User];
    const result = getLoadingFavouriteStatus(state);

    expect(result).toBe(loadingFavouriteFilms);
  });

  it('should return error status from state', () => {
    const { hasError } = state[NameSpace.User];
    const result = getErrorStatus(state);

    expect(result).toBe(hasError);
  });
});
