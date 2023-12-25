import { NameSpace } from '../../../const';
import { ErrorData, State } from '../../../types/state';

export const getErrorMessage = (state: Pick<State, NameSpace.Error>): string => state[NameSpace.Error].message;
export const getErrorType = (state: Pick<State, NameSpace.Error>): string => state[NameSpace.Error].errorType;
export const getErrorData = (state: Pick<State, NameSpace.Error>): ErrorData => state[NameSpace.Error];
