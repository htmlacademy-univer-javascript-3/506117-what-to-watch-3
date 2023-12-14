import { createSlice } from '@reduxjs/toolkit';
import { ErrorData } from '../../../types/state';
import { NameSpace } from '../../../const';
import { ErrorDetails } from '../../../types/error-type';

const initialState: ErrorData = {
  message: '',
  errorType: '',
  details: []
};

export const errorData = createSlice({
  name: NameSpace.Error,
  initialState,
  reducers: {
    setErrorData: (state, action: {type: string; payload: ErrorDetails[]}) => {
      state.details = action.payload;
    }
  }
});

export const { setErrorData } = errorData.actions;
