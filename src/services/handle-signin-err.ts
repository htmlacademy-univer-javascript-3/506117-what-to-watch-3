import {store} from '../store';
import {setUserError} from '../store/action';
import {clearErrorAction} from '../store/api-actions';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setUserError(message));
  store.dispatch(clearErrorAction());
};