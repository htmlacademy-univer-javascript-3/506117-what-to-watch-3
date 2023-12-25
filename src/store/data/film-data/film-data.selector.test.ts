import { describe } from 'vitest';
import { film } from '../../../utils/mocks/film';
import { mockFilms } from '../../../utils/mocks/films';
import { mockReviews } from '../../../utils/mocks/reviews';
import { NameSpace } from '../../../const';
import { getErrorDataStatus, getFilmDetails, getFilmDetailsLoadingStatus, getReviews, getReviewsLoadingStatus, getSimilarFilms, getSimilarFilmsLoadingStatus } from './selectors';

describe('film-data selectors', () => {
  const state = {
    [NameSpace.Film]: {
      filmDetails: film,
      similarFilms: mockFilms.slice(0, 4),
      reviews: mockReviews,
      isFilmDetailsLoading: false,
      isSimilarFilmsLoading: false,
      isReviewsLoading: false,
      hasError: false
    }
  };

  it('should return filmDetails from state', () => {
    const { filmDetails } = state[NameSpace.Film];
    const result = getFilmDetails(state);

    expect(result).toEqual(filmDetails);
  });

  it('should return similarFilms from state', () => {
    const { similarFilms } = state[NameSpace.Film];
    const result = getSimilarFilms(state);

    expect(result).toEqual(similarFilms);
  });

  it('should return reviews from state', () => {
    const { reviews } = state[NameSpace.Film];
    const result = getReviews(state);

    expect(result).toEqual(reviews);
  });

  it('should return error from state', () => {
    const { hasError } = state[NameSpace.Film];
    const result = getErrorDataStatus(state);

    expect(result).toBe(hasError);
  });

  it('should reviews loading status from state', () => {
    const { isReviewsLoading } = state[NameSpace.Film];
    const result = getReviewsLoadingStatus(state);

    expect(result).toBe(isReviewsLoading);
  });

  it('should similar films loading status from state', () => {
    const { isSimilarFilmsLoading } = state[NameSpace.Film];
    const result = getSimilarFilmsLoadingStatus(state);

    expect(result).toBe(isSimilarFilmsLoading);
  });

  it('should film details loading status from state', () => {
    const { isFilmDetailsLoading } = state[NameSpace.Film];
    const result = getFilmDetailsLoadingStatus(state);

    expect(result).toBe(isFilmDetailsLoading);
  });
});
