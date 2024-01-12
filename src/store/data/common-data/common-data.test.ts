import { describe } from 'vitest';
import { commonData, putGenreFilms } from './common-data';
import { fetchFilmsAction, fetchPromoAction } from '../../api-actions';
import { makeEmptyCommonData, makeFakeCommonData, makeFakeFilm } from '../../../utils/mocks';

describe('common-data slice', () => {
  it('should return initial state with empty action', () => {
    const expectedState = makeEmptyCommonData();
    const emptyAction = { type: '' };
    const result = commonData.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const expectedState = { ...makeEmptyCommonData() };
    const emptyAction = { type: '' };
    const result = commonData.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should set "isFilmsDataLoading" to "true", "hasError" to "false" with "fetchFilmsAction.pending"', () => {
    const expectedState = { ...makeEmptyCommonData(), isFilmsDataLoading: true };
    const result = commonData.reducer(undefined, fetchFilmsAction.pending);
    expect(result).toEqual(expectedState);
  });

  it('should set "isPromoLoading" to "true", "hasError" to "false" with "fetchPromoAction.pending"', () => {
    const expectedState = { ...makeEmptyCommonData(), isPromoLoading: true };
    const result = commonData.reducer(undefined, fetchPromoAction.pending);
    expect(result).toEqual(expectedState);
  });

  it('should set "films" to array, "isFilmsDataLoading" to "false" with "fetchQuestionAction.fulfilled"', () => {
    const expectedState = { ...makeEmptyCommonData(), isFilmsDataLoading: false, films: Array({ length: 5 }).map(() => makeFakeFilm()) };

    const result = commonData.reducer(
      undefined,
      fetchFilmsAction.fulfilled(expectedState.films, '', undefined)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "genreFilms" to array', () => {
    const genre = { id: 0, title: 'All genres' };
    const fakeCommonData = makeFakeCommonData();
    const expectedState = { ...fakeCommonData, genreFilms: fakeCommonData.films, genre: genre };
    
    const result = commonData.reducer(
      { ...makeEmptyCommonData(), films: expectedState.films, genre: genre, promo: fakeCommonData.promo },
      putGenreFilms()
    );

    expect(result).toEqual(expectedState);
  });


  it('should set "isFilmsDataLoading" to "true", "hasError" to "true" with "fetchFilmsAction.rejected', () => {
    const expectedState = { ...makeEmptyCommonData(), hasError: true };

    const result = commonData.reducer(
      undefined,
      fetchFilmsAction.rejected
    );

    expect(result).toEqual(expectedState);
  });
});
