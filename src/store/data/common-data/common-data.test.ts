import { describe } from 'vitest';
import { commonData, putGenreFilms } from './common-data';
import { fetchFilmsAction, fetchPromoAction } from '../../api-actions';
import { mockFilms } from '../../../utils/mocks/films';
import { mockPromo } from '../../../utils/mocks/promo';

describe('common-data slice', () => {
  it('should return initial state with empty action', () => {
    const expectedState = {
      films: [],
      genre: {
        id: 0,
        title: 'All genres'
      },
      genreFilms: [],
      promo: null,
      isFilmsDataLoading: false,
      isPromoLoading: false,
      hasError: false
    };

    const emptyAction = { type: '' };
    const result = commonData.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const expectedState = {
      films: [],
      genre: {
        id: 0,
        title: 'All genres'
      },
      genreFilms: [],
      promo: null,
      isFilmsDataLoading: false,
      isPromoLoading: false,
      hasError: false
    };

    const emptyAction = { type: '' };
    const result = commonData.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should set "isFilmsDataLoading" to "true", "hasError" to "false" with "fetchFilmsAction.pending"', () => {
    const expectedState = {
      films: [],
      genre: {
        id: 0,
        title: 'All genres'
      },
      genreFilms: [],
      promo: null,
      isFilmsDataLoading: true,
      isPromoLoading: false,
      hasError: false
    };

    const result = commonData.reducer(undefined, fetchFilmsAction.pending);
    expect(result).toEqual(expectedState);
  });

  it('should set "isPromoLoading" to "true", "hasError" to "false" with "fetchPromoAction.pending"', () => {
    const expectedState = {
      films: [],
      genre: {
        id: 0,
        title: 'All genres'
      },
      genreFilms: [],
      promo: null,
      isFilmsDataLoading: false,
      isPromoLoading: true,
      hasError: false
    };

    const result = commonData.reducer(undefined, fetchPromoAction.pending);
    expect(result).toEqual(expectedState);
  });

  it('should set "films" to array, "isFilmsDataLoading" to "false" with "fetchQuestionAction.fulfilled"', () => {
    const expectedState = {
      films: mockFilms,
      genre: {
        id: 0,
        title: 'All genres'
      },
      genreFilms: [],
      promo: null,
      isFilmsDataLoading: false,
      isPromoLoading: false,
      hasError: false
    };

    const result = commonData.reducer(
      undefined,
      fetchFilmsAction.fulfilled(mockFilms, '', undefined)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "genreFilms" to array', () => {
    const expectedState = {
      films: mockFilms,
      genre: {
        id: 0,
        title: 'All genres'
      },
      genreFilms: mockFilms,
      promo: mockPromo,
      isFilmsDataLoading: false,
      isPromoLoading: false,
      hasError: false
    };

    const result = commonData.reducer(
      {
        films: mockFilms,
        genre: {
          id: 0,
          title: 'All genres'
        },
        genreFilms: [],
        promo: mockPromo,
        isFilmsDataLoading: false,
        isPromoLoading: false,
        hasError: false
      },
      putGenreFilms()
    );

    expect(result).toEqual(expectedState);
  });


  it('should set "isFilmsDataLoading" to "true", "hasError" to "true" with "fetchFilmsAction.rejected', () => {
    const expectedState = {
      films: [],
      genre: {
        id: 0,
        title: 'All genres'
      },
      genreFilms: [],
      promo: null,
      isFilmsDataLoading: false,
      isPromoLoading: false,
      hasError: true
    };

    const result = commonData.reducer(
      undefined,
      fetchFilmsAction.rejected
    );

    expect(result).toEqual(expectedState);
  });
});
