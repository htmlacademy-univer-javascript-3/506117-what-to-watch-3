import {store} from '../store';
import {setUserError} from '../store/action';
import {clearErrorAction} from '../store/api-actions';
import { DetailMessageType } from '../types/error-type';

export const processErrorHandle = (details: DetailMessageType): void => {
  store.dispatch(setUserError(details));
  store.dispatch(clearErrorAction());
};