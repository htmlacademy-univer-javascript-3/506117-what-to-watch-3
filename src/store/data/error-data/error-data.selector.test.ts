import { describe, it } from 'vitest';
import { NameSpace } from '../../../const';
import { getErrorData, getErrorMessage, getErrorType } from './selectors';

describe('error-data selectors', () => {
  const state = {
    [NameSpace.Error]: {
      message: 'Validation error: \' / wtw / login\'',
      errorType: 'VALIDATION_ERROR',
      details: [
        {
          property: 'password',
          value: '1',
          messages: [
            'Password no have letter or number!',
            'password must be longer than or equal to 2 characters'
          ]
        }
      ]
    }
  };

  it('should return message from state', () => {
    const { message } = state[NameSpace.Error];
    const result = getErrorMessage(state);

    expect(result).toBe(message);
  });

  it('should return error type from state', () => {
    const { errorType } = state[NameSpace.Error];
    const result = getErrorType(state);

    expect(result).toBe(errorType);
  });

  it('should return all error-data type from state', () => {
    const data = state[NameSpace.Error];
    const result = getErrorData(state);

    expect(result).toEqual(data);
  });
});
