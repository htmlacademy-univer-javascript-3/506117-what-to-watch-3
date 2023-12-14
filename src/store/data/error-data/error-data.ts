import { createSlice } from '@reduxjs/toolkit';
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
    setErrorData: (state, action: {type: string; payload: ErrorData}) => {
      state = action.payload;
    }
  }
});

export const { setErrorData } = errorData.actions;
