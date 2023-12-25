import { describe } from 'vitest';
import { filmData } from './film-data';
import { fetchFilmDetailsAction, fetchReviews, fetchSimilarFilmsAction } from '../../api-actions';
import { film } from '../../../utils/mocks/film';
import { mockFilms } from '../../../utils/mocks/films';
import { mockReviews } from '../../../utils/mocks/reviews';

describe('film-data slice', () => {
  it('should return initial state with empty action', () => {
    const expectedState = {
      filmDetails: null,
      similarFilms: [],
      reviews: [],
      isFilmDetailsLoading: false,
      isSimilarFilmsLoading: false,
      isReviewsLoading: false,
      hasError: false
    };

    const emptyAction = { type: '' };
    const result = filmData.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const expectedState = {
      filmDetails: null,
      similarFilms: [],
      reviews: [],
      isFilmDetailsLoading: false,
      isSimilarFilmsLoading: false,
      isReviewsLoading: false,
      hasError: false
    };

    const emptyAction = { type: '' };
    const result = filmData.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should set "isFilmDetailsLoading" to "true", "hasError" to "false" with "fetchFilmsAction.pending"', () => {
    const expectedState = {
      filmDetails: null,
      similarFilms: [],
      reviews: [],
      isFilmDetailsLoading: true,
      isSimilarFilmsLoading: false,
      isReviewsLoading: false,
      hasError: false
    };

    const result = filmData.reducer(undefined, fetchFilmDetailsAction.pending);
    expect(result).toEqual(expectedState);
  });

  it('should set "isSimilarFilmsLoading" to "true", "hasError" to "false" with "fetchSimilarFilmsAction.pending"', () => {
    const expectedState = {
      filmDetails: null,
      similarFilms: [],
      reviews: [],
      isFilmDetailsLoading: false,
      isSimilarFilmsLoading: true,
      isReviewsLoading: false,
      hasError: false
    };

    const result = filmData.reducer(undefined, fetchSimilarFilmsAction.pending);
    expect(result).toEqual(expectedState);
  });

  it('should set "filmDetails" to array, "isFilmDetailsLoading" to "false" with "fetchFilmDetailsAction.fulfilled"', () => {
    const expectedState = {
      filmDetails: film,
      similarFilms: [],
      reviews: [],
      isFilmDetailsLoading: false,
      isSimilarFilmsLoading: false,
      isReviewsLoading: false,
      hasError: false
    };

    const result = filmData.reducer(
      {
        filmDetails: null,
        similarFilms: [],
        reviews: [],
        isFilmDetailsLoading: true,
        isSimilarFilmsLoading: false,
        isReviewsLoading: false,
        hasError: false
      },
      fetchFilmDetailsAction.fulfilled(film, '', { id: '' })
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "similarFilms" to array, "isSimilarFilmsLoading" to "false" with "fetchSimilarFilmsAction.fulfilled"', () => {
    const expectedState = {
      filmDetails: film,
      similarFilms: mockFilms,
      reviews: [],
      isFilmDetailsLoading: false,
      isSimilarFilmsLoading: false,
      isReviewsLoading: false,
      hasError: false
    };

    const result = filmData.reducer(
      {
        filmDetails: film,
        similarFilms: [],
        reviews: [],
        isFilmDetailsLoading: false,
        isSimilarFilmsLoading: true,
        isReviewsLoading: false,
        hasError: false
      },
      fetchSimilarFilmsAction.fulfilled(mockFilms, '', { id: '' })
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "reviews" to array, "isReviewsLoading" to "false" with "fetchReviews.fulfilled"', () => {
    const expectedState = {
      filmDetails: film,
      similarFilms: [],
      reviews: mockReviews,
      isFilmDetailsLoading: false,
      isSimilarFilmsLoading: false,
      isReviewsLoading: false,
      hasError: false
    };

    const result = filmData.reducer(
      {
        filmDetails: film,
        similarFilms: [],
        reviews: [],
        isFilmDetailsLoading: false,
        isSimilarFilmsLoading: false,
        isReviewsLoading: true,
        hasError: false
      },
      fetchReviews.fulfilled(mockReviews, '', { id: '' })
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "isFilmDetailsLoading" to "false", "hasError" to "true" with "fetchFilmDetailsAction.rejected', () => {
    const expectedState = {
      filmDetails: null,
      similarFilms: [],
      reviews: [],
      isFilmDetailsLoading: false,
      isSimilarFilmsLoading: false,
      isReviewsLoading: false,
      hasError: true
    };

    const result = filmData.reducer(
      undefined,
      fetchFilmDetailsAction.rejected
    );

    expect(result).toEqual(expectedState);
  });
});
