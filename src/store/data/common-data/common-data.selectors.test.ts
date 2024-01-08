import { describe, it } from 'vitest';
import { NameSpace } from '../../../const';
import { getErrorDataStatus, getFilms, getFilmsLoadingStatus, getGenre, getGenreFilms, getPromo, getPromoLoadingStatus } from './selectors';
import { makeFakeCommonData } from '../../../utils/mocks';

describe('common-data selectors', () => {
  it('should return films from state', () => {
    const state = {
      [NameSpace.Data]: makeFakeCommonData()
    };

    const { films } = state[NameSpace.Data];
    const result = getFilms(state);

    expect(result).toEqual(films);
  });

  it('should return genre from state', () => {
    const state = {
      [NameSpace.Data]: makeFakeCommonData()
    };

    const { genre } = state[NameSpace.Data];
    const result = getGenre(state);

    expect(result).toEqual(genre);
  });

  it('should return genreFilms from state', () => {
    const state = {
      [NameSpace.Data]: makeFakeCommonData()
    };

    const { genreFilms } = state[NameSpace.Data];
    const result = getGenreFilms(state);

    expect(result).toEqual(genreFilms);
  });

  it('should return promo from state', () => {
    const state = {
      [NameSpace.Data]: makeFakeCommonData()
    };

    const { promo } = state[NameSpace.Data];
    const result = getPromo(state);

    expect(result).toEqual(promo);
  });

  it('should return films data loading status', () => {
    const state = {
      [NameSpace.Data]: makeFakeCommonData()
    };

    const { isFilmsDataLoading } = state[NameSpace.Data];
    const result = getFilmsLoadingStatus(state);

    expect(result).toEqual(isFilmsDataLoading);
  });

  it('should return promo data loading status', () => {
    const state = {
      [NameSpace.Data]: makeFakeCommonData()
    };

    const { isPromoLoading } = state[NameSpace.Data];
    const result = getPromoLoadingStatus(state);

    expect(result).toEqual(isPromoLoading);
  });

  it('should return error status from state', () => {
    const state = {
      [NameSpace.Data]: makeFakeCommonData()
    };

    const { hasError } = state[NameSpace.Data];
    const result = getErrorDataStatus(state);
    expect(result).toBe(hasError);
  });
});
