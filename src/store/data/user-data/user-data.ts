import { createSlice } from '@reduxjs/toolkit';
import { UserData } from '../../../types/state';
import { AuthorizationStatus, NameSpace } from '../../../const';
import { fetchFavouriteFilmsAction, loginAction, logoutAction, postFavouriteAction, postReviewAction } from '../../api-actions';

const initialState: UserData = {
  userDetails: {
    avatarUrl: '',
    email: '',
    name: '',
    token: ''
  },
  favouriteFilms: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isLoadingData: false,
  reviewPosting: false,
  favouritePosting: false,
  loadingFavouriteFilms: false,
  hasError: false
};

export const userData = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loginAction.pending, (state) => {
        state.isLoadingData = true;
        state.hasError = false;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.userDetails = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.isLoadingData = false;
      })
      .addCase(loginAction.rejected, (state) => {
        state.hasError = true;
        state.isLoadingData = false;
      })
      .addCase(logoutAction.pending, (state) => {
        state.hasError = false;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Unknown;
      })
      .addCase(logoutAction.rejected, (state) => {
        state.hasError = true;
      })
      .addCase(postReviewAction.pending, (state) => {
        state.reviewPosting = true;
        state.hasError = false;
      })
      .addCase(postReviewAction.fulfilled, (state) => {
        state.reviewPosting = false;
      })
      .addCase(postReviewAction.rejected, (state) => {
        state.hasError = true;
      })
      .addCase(fetchFavouriteFilmsAction.pending, (state) => {
        state.loadingFavouriteFilms = true;
        state.hasError = false;
      })
      .addCase(fetchFavouriteFilmsAction.fulfilled, (state, action) => {
        state.loadingFavouriteFilms = false;
        state.favouriteFilms = action.payload;
      })
      .addCase(fetchFavouriteFilmsAction.rejected, (state) => {
        state.hasError = true;
      })
      .addCase(postFavouriteAction.pending, (state) => {
        state.favouritePosting = true;
        state.hasError = false;
      })
      .addCase(postFavouriteAction.fulfilled, (state) => {
        state.favouritePosting = false;
      })
      .addCase(postFavouriteAction.rejected, (state) => {
        state.hasError = true;
        state.favouritePosting = false;
      });
  }
});
