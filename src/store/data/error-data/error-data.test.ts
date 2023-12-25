import { describe } from 'vitest';
import { errorData, setErrorData } from './error-data';

describe('error-data slice', () => {
  it('should return initial state with empty action', () => {
    const expectedState = {
      message: '',
      errorType: '',
      details: []
    };

    const emptyAction = { type: '' };
    const result = errorData.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const expectedState = {
      message: '',
      errorType: '',
      details: []
    };

    const emptyAction = { type: '' };
    const result = errorData.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should set correct error data', () => {
    const expectedState = {
      message: 'Validation error: \' / wtw / login\'',
      errorType: 'VALIDATION_ERROR',
      details: [
        {
          property: 'password',
          value: 1,
          messages: [
            'Password no have letter or number!',
            'password must be longer than or equal to 2 characters'
          ]
        }
      ]
    };

    const result = errorData.reducer(
      {
        message: '',
        errorType: '',
        details: []
      },
      setErrorData({ errorData: expectedState })
    );

    expect(result).toEqual(expectedState);
  });
});
