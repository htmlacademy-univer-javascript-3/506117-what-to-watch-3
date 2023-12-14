import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { commonData } from './data/common-data/common-data';
import { filmData } from './data/film-data/film-data';
import { userData } from './data/user-data/user-data';
import { errorData } from './data/error-data/error-data';


export const rootReducer = combineReducers({
  [NameSpace.Data]: commonData.reducer,
  [NameSpace.Film]: filmData.reducer,
  [NameSpace.User]: userData.reducer,
  [NameSpace.Error]: errorData.reducer
});
