import {store} from '../../store';
//import {clearErrorAction} from '../../store/api-actions';
import { setErrorData } from '../../store/data/error-data/error-data';
import { ErrorDetails } from '../../types/error-type';

export const processErrorHandle = (details: ErrorDetails): void => {
  store.dispatch(setErrorData(details));
  // store.dispatch(clearErrorAction());
};
