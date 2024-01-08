import { describe } from 'vitest';
import { filmData } from './film-data';
import { fetchFilmDetailsAction, fetchReviews, fetchSimilarFilmsAction } from '../../api-actions';
import { makeEmptyFilmData, makeFakeFilm, makeFakeFilmDetails, makeFakeReview } from '../../../utils/mocks';

describe('film-data slice', () => {
  it('should return initial state with empty action', () => {
    const expectedState = makeEmptyFilmData();
    const emptyAction = { type: '' };
    const result = filmData.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const expectedState = makeEmptyFilmData();
    const emptyAction = { type: '' };
    const result = filmData.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should set "isFilmDetailsLoading" to "true", "hasError" to "false" with "fetchFilmsAction.pending"', () => {
    const expectedState = {...makeEmptyFilmData(), isFilmDetailsLoading: true};
    const result = filmData.reducer(undefined, fetchFilmDetailsAction.pending);
    expect(result).toEqual(expectedState);
  });

  it('should set "isSimilarFilmsLoading" to "true", "hasError" to "false" with "fetchSimilarFilmsAction.pending"', () => {
    const expectedState = { ...makeEmptyFilmData(), isSimilarFilmsLoading: true };
    const result = filmData.reducer(undefined, fetchSimilarFilmsAction.pending);
    expect(result).toEqual(expectedState);
  });

  it('should set "filmDetails" to array, "isFilmDetailsLoading" to "false" with "fetchFilmDetailsAction.fulfilled"', () => {
    const expectedState = {...makeEmptyFilmData(), filmDetails: makeFakeFilmDetails(), isFilmDetailsLoading: false};

    const result = filmData.reducer(
      {...makeEmptyFilmData(), isFilmDetailsLoading: true},
      fetchFilmDetailsAction.fulfilled(expectedState.filmDetails, '', { id: '' })
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "similarFilms" to array, "isSimilarFilmsLoading" to "false" with "fetchSimilarFilmsAction.fulfilled"', () => {
    const expectedState = {
      ...makeEmptyFilmData(), 
      filmDetails: makeFakeFilmDetails(),
      similarFilms: Array.from({length: 2}).map(() => makeFakeFilm()), 
      isSimilarFilmsLoading: false
    };

    const result = filmData.reducer(
      {...makeEmptyFilmData(), isSimilarFilmsLoading: true, filmDetails: expectedState.filmDetails},
      fetchSimilarFilmsAction.fulfilled(expectedState.similarFilms, '', { id: '' })
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "reviews" to array, "isReviewsLoading" to "false" with "fetchReviews.fulfilled"', () => {
    const expectedState = {
      ...makeEmptyFilmData(), 
      filmDetails: makeFakeFilmDetails(),
      reviews: Array.from({length: 5}).map(() => makeFakeReview()),
      isReviewsLoading: false
    };

    const result = filmData.reducer(
      {
        ...makeEmptyFilmData(), 
        filmDetails: expectedState.filmDetails,
        isReviewsLoading: true
      },
      fetchReviews.fulfilled(expectedState.reviews, '', { id: '' })
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "isFilmDetailsLoading" to "false", "hasError" to "true" with "fetchFilmDetailsAction.rejected', () => {
    const expectedState = {...makeEmptyFilmData(), hasError: true};

    const result = filmData.reducer(
      undefined,
      fetchFilmDetailsAction.rejected
    );

    expect(result).toEqual(expectedState);
  });
});
