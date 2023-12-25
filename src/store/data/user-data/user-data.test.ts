import { describe } from 'vitest';
import { AuthorizationStatus } from '../../../const';
import { userData } from './user-data';
import { fetchFavouriteFilmsAction, loginAction, postFavouriteAction, postReviewAction } from '../../api-actions';
import { mockFilms } from '../../../utils/mocks/films';

describe('user-data slice', () => {
  it('should return initial state with empty action', () => {
    const expectedState = {
      userDetails: {
        avatarUrl: '',
        email: '',
        name: '',
        token: ''
      },
      favouriteFilms: [],
      authorizationStatus: AuthorizationStatus.Unknown,
      isLoadingData: false,
      reviewPosting: false,
      favouritePosting: false,
      loadingFavouriteFilms: false,
      hasError: false
    };

    const emptyAction = { type: '' };
    const result = userData.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const expectedState = {
      userDetails: {
        avatarUrl: '',
        email: '',
        name: '',
        token: ''
      },
      favouriteFilms: [],
      authorizationStatus: AuthorizationStatus.Unknown,
      isLoadingData: false,
      reviewPosting: false,
      favouritePosting: false,
      loadingFavouriteFilms: false,
      hasError: false
    };

    const emptyAction = { type: '' };
    const result = userData.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should set "isLoadingData" to "true", "hasError" to "false" with "loginAction.pending"', () => {
    const expectedState = {
      userDetails: {
        avatarUrl: '',
        email: '',
        name: '',
        token: ''
      },
      favouriteFilms: [],
      authorizationStatus: AuthorizationStatus.Unknown,
      isLoadingData: true,
      reviewPosting: false,
      favouritePosting: false,
      loadingFavouriteFilms: false,
      hasError: false
    };

    const result = userData.reducer(undefined, loginAction.pending);
    expect(result).toEqual(expectedState);
  });

  it('should set "reviewPosting" to "true", "hasError" to "false" with "loginAction.pending"', () => {
    const expectedState = {
      userDetails: {
        avatarUrl: '',
        email: '',
        name: '',
        token: ''
      },
      favouriteFilms: [],
      authorizationStatus: AuthorizationStatus.Unknown,
      isLoadingData: false,
      reviewPosting: true,
      favouritePosting: false,
      loadingFavouriteFilms: false,
      hasError: false
    };

    const result = userData.reducer(undefined, postReviewAction.pending);
    expect(result).toEqual(expectedState);
  });

  it('should set "favouritePosting" to "true", "hasError" to "false" with "postFavouriteAction.pending"', () => {
    const expectedState = {
      userDetails: {
        avatarUrl: '',
        email: '',
        name: '',
        token: ''
      },
      favouriteFilms: [],
      authorizationStatus: AuthorizationStatus.Unknown,
      isLoadingData: false,
      reviewPosting: false,
      favouritePosting: true,
      loadingFavouriteFilms: false,
      hasError: false
    };

    const result = userData.reducer(undefined, postFavouriteAction.pending);
    expect(result).toEqual(expectedState);
  });

  it('should set "favouritePosting" to "true", "hasError" to "false" with "fetchFavouriteFilmsAction.pending"', () => {
    const expectedState = {
      userDetails: {
        avatarUrl: '',
        email: '',
        name: '',
        token: ''
      },
      favouriteFilms: [],
      authorizationStatus: AuthorizationStatus.Unknown,
      isLoadingData: false,
      reviewPosting: false,
      favouritePosting: false,
      loadingFavouriteFilms: true,
      hasError: false
    };

    const result = userData.reducer(undefined, fetchFavouriteFilmsAction.pending);
    expect(result).toEqual(expectedState);
  });

  it('should set "userDetails", "isLoadingData" to "false", authorizationStatus to Auth with "fetchFilmDetailsAction.fulfilled"', () => {
    const expectedState = {
      userDetails: {
        avatarUrl: 'ktoto',
        email: 'ktoto@ktoto',
        name: 'ktoto',
        token: 'ktotoktotoktoto'
      },
      favouriteFilms: [],
      authorizationStatus: AuthorizationStatus.Auth,
      isLoadingData: false,
      reviewPosting: false,
      favouritePosting: false,
      loadingFavouriteFilms: false,
      hasError: false
    };

    const result = userData.reducer(
      {
        userDetails: {
          avatarUrl: '',
          email: '',
          name: '',
          token: ''
        },
        favouriteFilms: [],
        authorizationStatus: AuthorizationStatus.Unknown,
        isLoadingData: true,
        reviewPosting: false,
        favouritePosting: false,
        loadingFavouriteFilms: false,
        hasError: false
      },
      loginAction.fulfilled(expectedState.userDetails, '', { login: '', password: '' })
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "favouriteFilms" with "fetchFilmDetailsAction.fulfilled"', () => {
    const expectedState = {
      userDetails: {
        avatarUrl: 'ktoto',
        email: 'ktoto@ktoto',
        name: 'ktoto',
        token: 'ktotoktotoktoto'
      },
      favouriteFilms: mockFilms,
      authorizationStatus: AuthorizationStatus.Auth,
      isLoadingData: false,
      reviewPosting: false,
      favouritePosting: false,
      loadingFavouriteFilms: false,
      hasError: false
    };

    const result = userData.reducer(
      {
        userDetails: {
          avatarUrl: 'ktoto',
          email: 'ktoto@ktoto',
          name: 'ktoto',
          token: 'ktotoktotoktoto'
        },
        favouriteFilms: mockFilms,
        authorizationStatus: AuthorizationStatus.Auth,
        isLoadingData: false,
        reviewPosting: false,
        favouritePosting: false,
        loadingFavouriteFilms: true,
        hasError: false
      },
      fetchFavouriteFilmsAction.fulfilled(expectedState.favouriteFilms, '', undefined)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "favouriteFilms" with "fetchFilmDetailsAction.fulfilled"', () => {
    const expectedState = {
      userDetails: {
        avatarUrl: 'ktoto',
        email: 'ktoto@ktoto',
        name: 'ktoto',
        token: 'ktotoktotoktoto'
      },
      favouriteFilms: mockFilms,
      authorizationStatus: AuthorizationStatus.Auth,
      isLoadingData: false,
      reviewPosting: false,
      favouritePosting: false,
      loadingFavouriteFilms: false,
      hasError: false
    };

    const result = userData.reducer(
      {
        userDetails: {
          avatarUrl: 'ktoto',
          email: 'ktoto@ktoto',
          name: 'ktoto',
          token: 'ktotoktotoktoto'
        },
        favouriteFilms: mockFilms,
        authorizationStatus: AuthorizationStatus.Auth,
        isLoadingData: false,
        reviewPosting: false,
        favouritePosting: false,
        loadingFavouriteFilms: true,
        hasError: false
      },
      fetchFavouriteFilmsAction.fulfilled(expectedState.favouriteFilms, '', undefined)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "isLoadingData" to "false", "hasError" to "true" with "fetchFilmDetailsAction.rejected', () => {
    const expectedState = {
      userDetails: {
        avatarUrl: 'ktoto',
        email: 'ktoto@ktoto',
        name: 'ktoto',
        token: 'ktotoktotoktoto'
      },
      favouriteFilms: mockFilms,
      authorizationStatus: AuthorizationStatus.Auth,
      isLoadingData: false,
      reviewPosting: false,
      favouritePosting: false,
      loadingFavouriteFilms: false,
      hasError: true
    };

    const result = userData.reducer(
      {
        userDetails: {
          avatarUrl: 'ktoto',
          email: 'ktoto@ktoto',
          name: 'ktoto',
          token: 'ktotoktotoktoto'
        },
        favouriteFilms: mockFilms,
        authorizationStatus: AuthorizationStatus.Auth,
        isLoadingData: false,
        reviewPosting: false,
        favouritePosting: false,
        loadingFavouriteFilms: false,
        hasError: false
      },
      loginAction.rejected
    );

    expect(result).toEqual(expectedState);
  });
});
