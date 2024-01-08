import { describe } from 'vitest';
import { NameSpace } from '../../../const';
import { getErrorDataStatus, getFilmDetails, getFilmDetailsLoadingStatus, getReviews, getReviewsLoadingStatus, getSimilarFilms, getSimilarFilmsLoadingStatus } from './selectors';
import { makeFakeFilmData } from '../../../utils/mocks';

describe('film-data selectors', () => {
  it('should return filmDetails from state', () => {
    const state = {
      [NameSpace.Film]: makeFakeFilmData()
    };

    const { filmDetails } = state[NameSpace.Film];
    const result = getFilmDetails(state);

    expect(result).toEqual(filmDetails);
  });

  it('should return similarFilms from state', () => {
    const state = {
      [NameSpace.Film]: makeFakeFilmData()
    };

    const { similarFilms } = state[NameSpace.Film];
    const result = getSimilarFilms(state);

    expect(result).toEqual(similarFilms);
  });

  it('should return reviews from state', () => {
    const state = {
      [NameSpace.Film]: makeFakeFilmData()
    };

    const { reviews } = state[NameSpace.Film];
    const result = getReviews(state);

    expect(result).toEqual(reviews);
  });

  it('should return error from state', () => {
    const state = {
      [NameSpace.Film]: makeFakeFilmData()
    };

    const { hasError } = state[NameSpace.Film];
    const result = getErrorDataStatus(state);

    expect(result).toBe(hasError);
  });

  it('should reviews loading status from state', () => {
    const state = {
      [NameSpace.Film]: makeFakeFilmData()
    };

    const { isReviewsLoading } = state[NameSpace.Film];
    const result = getReviewsLoadingStatus(state);

    expect(result).toBe(isReviewsLoading);
  });

  it('should similar films loading status from state', () => {
    const state = {
      [NameSpace.Film]: makeFakeFilmData()
    };

    const { isSimilarFilmsLoading } = state[NameSpace.Film];
    const result = getSimilarFilmsLoadingStatus(state);

    expect(result).toBe(isSimilarFilmsLoading);
  });

  it('should film details loading status from state', () => {
    const state = {
      [NameSpace.Film]: makeFakeFilmData()
    };

    const { isFilmDetailsLoading } = state[NameSpace.Film];
    const result = getFilmDetailsLoadingStatus(state);

    expect(result).toBe(isFilmDetailsLoading);
  });
});
