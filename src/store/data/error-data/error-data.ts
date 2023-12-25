import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ErrorData } from '../../../types/state';
import { NameSpace } from '../../../const';

const initialState: ErrorData = {
  message: '',
  errorType: '',
  details: []
};

export const errorData = createSlice({
  name: NameSpace.Error,
  initialState,
  reducers: {
    setErrorData: (state, action: PayloadAction<{ errorData: ErrorData }>) => {
      const { errorType, message, details } = action.payload.errorData;
      state.errorType = errorType;
      state.message = message;
      state.details = details;
    }
  }
});

export const { setErrorData } = errorData.actions;
