import { describe, it } from 'vitest';
import { NameSpace } from '../../../const';
import { mockFilms } from '../../../utils/mocks/films';
import { mockPromo } from '../../../utils/mocks/promo';
import { getErrorDataStatus, getFilms, getFilmsLoadingStatus, getGenre, getGenreFilms, getPromo, getPromoLoadingStatus } from './selectors';

describe('common-data selectors', () => {
  const state = {
    [NameSpace.Data]: {
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
    }
  };

  it('should return films from state', () => {
    const { films } = state[NameSpace.Data];
    const result = getFilms(state);

    expect(result).toEqual(films);
  });

  it('should return genre from state', () => {
    const { genre } = state[NameSpace.Data];
    const result = getGenre(state);

    expect(result).toEqual(genre);
  });

  it('should return genreFilms from state', () => {
    const { genreFilms } = state[NameSpace.Data];
    const result = getGenreFilms(state);

    expect(result).toEqual(genreFilms);
  });

  it('should return promo from state', () => {
    const { promo } = state[NameSpace.Data];
    const result = getPromo(state);

    expect(result).toEqual(promo);
  });

  it('should return films data loading status', () => {
    const { isFilmsDataLoading } = state[NameSpace.Data];
    const result = getFilmsLoadingStatus(state);

    expect(result).toEqual(isFilmsDataLoading);
  });

  it('should return promo data loading status', () => {
    const { isPromoLoading } = state[NameSpace.Data];
    const result = getPromoLoadingStatus(state);

    expect(result).toEqual(isPromoLoading);
  });

  it('should return error status from state', () => {
    const { hasError } = state[NameSpace.Data];
    const result = getErrorDataStatus(state);
    expect(result).toBe(hasError);
  });
});
