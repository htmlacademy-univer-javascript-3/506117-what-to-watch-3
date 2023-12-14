import { NameSpace } from '../../../const';
import { ErrorData, State } from '../../../types/state';

export const getError = (state: State): ErrorData => state[NameSpace.Error];
