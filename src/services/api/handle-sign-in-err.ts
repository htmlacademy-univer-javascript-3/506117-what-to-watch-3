import { TIMEOUT_SHOW_ERROR } from '../../const';
import { store } from '../../store';
import { setErrorData } from '../../store/data/error-data/error-data';
import { ErrorData } from '../../types/state';

export const processErrorHandle = (errorData: ErrorData): void => {
  store.dispatch(setErrorData({ errorData: errorData }));
  setTimeout(
    () => store.dispatch(setErrorData({
      errorData: {
        errorType: '',
        message: '',
        details: []
      }
    })),
    TIMEOUT_SHOW_ERROR,
  );
};
