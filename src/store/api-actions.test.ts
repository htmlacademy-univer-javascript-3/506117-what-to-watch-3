import { describe, expect } from 'vitest';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from '@reduxjs/toolkit';
import { State } from '../types/state.ts';
import { AppThunkDispatch, createFakeToken, extractActionsTypes, makeFakeFilm, makeFakeReview } from '../utils/mocks.ts';
import { checkAuthAction, fetchFavouriteFilmsAction, fetchFilmDetailsAction, fetchFilmsAction, fetchPromoAction, fetchReviewsAction, fetchSimilarFilmsAction, loginAction, logoutAction, postFavouriteAction, postReviewAction } from './api-actions.ts';
import { api } from './index.ts';
import { internet } from 'faker';

describe('Async actions', () => {
  const axios = api;
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<
    State,
    Action<string>,
    AppThunkDispatch
  >(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator();
  });

  describe('loginAction', () => {
    it('should dispatch "loginAction.pending" and "loginAction.fulfilled" when server response 200', async () => {
      const loginData = { login: internet.email(), password: internet.password() };
      const fakeServerReplay = createFakeToken();
      mockAxiosAdapter.onPost('/login').reply(200, fakeServerReplay);

      await store.dispatch(loginAction(loginData));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loginAction.pending.type,
        loginAction.fulfilled.type
      ]);
    });

    it('should dispatch "loginAction.pending" and "loginAction.rejected" when server response 400', async () => {
      const loginData = { login: internet.email(), password: internet.password() };
      const fakeServerReplay = createFakeToken();
      mockAxiosAdapter.onPost('/login').reply(400, fakeServerReplay);

      await store.dispatch(loginAction(loginData));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loginAction.pending.type,
        loginAction.rejected.type
      ]);
    });
  });

  describe('logoutAction', () => {
    it('should dispatch "logoutAction.pending" and "logoutAction.fulfilled" when server response 204', async () => {
      mockAxiosAdapter.onDelete('/logout').reply(204);

      await store.dispatch(logoutAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        logoutAction.pending.type,
        logoutAction.fulfilled.type,
      ]);
    });
  });

  describe('checkAuthAction', () => {
    it('should dispatch "checkAuthAction.pending" and "checkAuthAction.fulfilled" when server response 200', async () => {
      mockAxiosAdapter.onGet('/login').reply(200);

      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.fulfilled.type,
      ]);
    });

    it('should dispatch "checkAuthAction.pending" and "checkAuthAction.rejected" when server response 401', async () => {
      mockAxiosAdapter.onGet('/login').reply(401);

      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.rejected.type,
      ]);
    });
  });

  describe('postFavouriteAction', () => {
    it('should dispatch "postFavouriteAction.pending" and "postFavouriteAction.fulfilled" when server response 200', async () => {
      const fakeFilm = makeFakeFilm();
      const status = 1;

      mockAxiosAdapter.onPost(`/favorite/${fakeFilm.id}/${status}`).reply(200);

      await store.dispatch(postFavouriteAction({ id: fakeFilm.id, status: status }));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        postFavouriteAction.pending.type,
        postFavouriteAction.fulfilled.type,
      ]);
    });

    it('should dispatch "postFavouriteAction.pending" and "postFavouriteAction.fulfilled" when server response 201', async () => {
      const fakeFilm = makeFakeFilm();
      const status = 0;

      mockAxiosAdapter.onPost(`/favorite/${fakeFilm.id}/${status}`).reply(201);

      await store.dispatch(postFavouriteAction({ id: fakeFilm.id, status: status }));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        postFavouriteAction.pending.type,
        postFavouriteAction.fulfilled.type,
      ]);
    });

    it('should dispatch "postFavouriteAction.pending" and "postFavouriteAction.rejected" when server response 400', async () => {
      const fakeFilm = makeFakeFilm();
      const status = 2;

      mockAxiosAdapter.onPost(`/favorite/${fakeFilm.id}/${status}`).reply(400);

      await store.dispatch(postFavouriteAction({ id: fakeFilm.id, status: status }));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        postFavouriteAction.pending.type,
        postFavouriteAction.rejected.type,
      ]);
    });

    it('should dispatch "postFavouriteAction.pending" and "postFavouriteAction.rejected" when server response 404', async () => {
      const fakeFilm = makeFakeFilm();
      const status = 1;

      mockAxiosAdapter.onPost(`/favorite/${fakeFilm.id}/${status}`).reply(404);

      await store.dispatch(postFavouriteAction({ id: fakeFilm.id, status: status }));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        postFavouriteAction.pending.type,
        postFavouriteAction.rejected.type,
      ]);
    });

    it('should dispatch "postFavouriteAction.pending" and "postFavouriteAction.rejected" when server response 409', async () => {
      const fakeFilm = makeFakeFilm();
      const status = 1;

      mockAxiosAdapter.onPost(`/favorite/${fakeFilm.id}/${status}`).reply(409);

      await store.dispatch(postFavouriteAction({ id: fakeFilm.id, status: status }));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        postFavouriteAction.pending.type,
        postFavouriteAction.rejected.type,
      ]);
    });
  });

  describe('postReviewAction', () => {
    it('should dispatch "postReviewAction.pending" and "postReviewAction.fulfilled" when server response 201', async () => {
      const fakeFilm = makeFakeFilm();
      const fakeReview = makeFakeReview()
      mockAxiosAdapter.onPost(`/comments/${fakeFilm.id}`).reply(201);

      await store.dispatch(postReviewAction(
        { id: fakeFilm.id, comment: fakeReview.comment, rating: fakeReview.rating }
      ));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        postReviewAction.pending.type,
        postReviewAction.fulfilled.type,
      ]);
    });

    it('should dispatch "postReviewAction.pending" and "postReviewAction.rejected" when server response 400', async () => {
      const fakeFilm = makeFakeFilm();
      const fakeReview = makeFakeReview()
      mockAxiosAdapter.onPost(`/comments/${fakeFilm.id}`).reply(400);

      await store.dispatch(postReviewAction(
        { id: fakeFilm.id, comment: fakeReview.comment, rating: fakeReview.rating }
      ));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        postReviewAction.pending.type,
        postReviewAction.rejected.type,
      ]);
    });

    it('should dispatch "postReviewAction.pending" and "postReviewAction.rejected" when server response 401', async () => {
      const fakeFilm = makeFakeFilm();
      const fakeReview = makeFakeReview()
      mockAxiosAdapter.onPost(`/comments/${fakeFilm.id}`).reply(401);

      await store.dispatch(postReviewAction(
        { id: fakeFilm.id, comment: fakeReview.comment, rating: fakeReview.rating }
      ));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        postReviewAction.pending.type,
        postReviewAction.rejected.type,
      ]);
    });

    it('should dispatch "postReviewAction.pending" and "postReviewAction.rejected" when server response 404', async () => {
      const fakeFilm = makeFakeFilm();
      const fakeReview = makeFakeReview()
      mockAxiosAdapter.onPost(`/comments/${fakeFilm.id}`).reply(404);

      await store.dispatch(postReviewAction(
        { id: fakeFilm.id, comment: fakeReview.comment, rating: fakeReview.rating }
      ));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        postReviewAction.pending.type,
        postReviewAction.rejected.type,
      ]);
    });
  });

  describe('fetchReviewsAction', () => {
    it('should dispatch "fetchReviewsAction.pending" and "fetchReviewsAction.fulfilled" when server response 200', async () => {
      const fakeFilm = makeFakeFilm();
      mockAxiosAdapter.onGet(`/comments/${fakeFilm.id}`).reply(200);

      await store.dispatch(fetchReviewsAction({ id: fakeFilm.id }));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchReviewsAction.pending.type,
        fetchReviewsAction.fulfilled.type,
      ]);
    });

    it('should dispatch "fetchReviewsAction.pending" and "fetchReviewsAction.rejected" when server response 404', async () => {
      const fakeFilm = makeFakeFilm();
      mockAxiosAdapter.onGet(`/comments/${fakeFilm.id}`).reply(404);

      await store.dispatch(fetchReviewsAction({ id: fakeFilm.id }));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchReviewsAction.pending.type,
        fetchReviewsAction.rejected.type,
      ]);
    });
  });

  describe('fetchFavouriteFilmsAction', () => {
    it('should dispatch "fetchFavouriteFilmsAction.pending" and "fetchFavouriteFilmsAction.fulfilled" when server response 200', async () => {
      mockAxiosAdapter.onGet(`/favorite`).reply(200);

      await store.dispatch(fetchFavouriteFilmsAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchFavouriteFilmsAction.pending.type,
        fetchFavouriteFilmsAction.fulfilled.type,
      ]);
    });

    it('should dispatch "fetchFavouriteFilmsAction.pending" and "fetchFavouriteFilmsAction.rejected" when server response 401', async () => {
      mockAxiosAdapter.onGet(`/favorite`).reply(401);

      await store.dispatch(fetchFavouriteFilmsAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchFavouriteFilmsAction.pending.type,
        fetchFavouriteFilmsAction.rejected.type,
      ]);
    });
  });

  describe('fetchSimilarFilmsAction', () => {
    it('should dispatch "fetchSimilarFilmsAction.pending" and "fetchSimilarFilmsAction.fulfilled" when server response 200', async () => {
      const fakeFilm = makeFakeFilm();
      mockAxiosAdapter.onGet(`/films/${fakeFilm.id}/similar`).reply(200);

      await store.dispatch(fetchSimilarFilmsAction({ id: fakeFilm.id }));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchSimilarFilmsAction.pending.type,
        fetchSimilarFilmsAction.fulfilled.type,
      ]);
    });

    it('should dispatch "fetchSimilarFilmsAction.pending" and "fetchSimilarFilmsAction.rejected" when server response 404', async () => {
      const fakeFilm = makeFakeFilm();
      mockAxiosAdapter.onGet(`/films/${fakeFilm.id}/similar`).reply(404);
      
      await store.dispatch(fetchSimilarFilmsAction({ id: fakeFilm.id }));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchSimilarFilmsAction.pending.type,
        fetchSimilarFilmsAction.rejected.type,
      ]);
    });
  });

  describe('fetchFilmDetailsAction', () => {
    it('should dispatch "fetchFilmDetailsAction.pending" and "fetchFilmDetailsAction.fulfilled" when server response 200', async () => {
      const fakeFilm = makeFakeFilm();
      mockAxiosAdapter.onGet(`/films/${fakeFilm.id}`).reply(200);

      await store.dispatch(fetchFilmDetailsAction({ id: fakeFilm.id }));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchFilmDetailsAction.pending.type,
        fetchFilmDetailsAction.fulfilled.type,
      ]);
    });

    it('should dispatch "fetchFilmDetailsAction.pending" and "fetchFilmDetailsAction.rejected" when server response 404', async () => {
      const fakeFilm = makeFakeFilm();
      mockAxiosAdapter.onGet(`/films/${fakeFilm.id}`).reply(404);
      
      await store.dispatch(fetchFilmDetailsAction({ id: fakeFilm.id }));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchFilmDetailsAction.pending.type,
        fetchFilmDetailsAction.rejected.type,
      ]);
    });
  });

  describe('fetchPromoAction', () => {
    it('should dispatch "fetchPromoAction.pending" and "fetchPromoAction.fulfilled" when server response 200', async () => {
      mockAxiosAdapter.onGet(`/promo`).reply(200);

      await store.dispatch(fetchPromoAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchPromoAction.pending.type,
        fetchPromoAction.fulfilled.type,
      ]);
    });
  });

  describe('fetchFilmsAction', () => {
    it('should dispatch "fetchFilmsAction.pending" and "fetchFilmsAction.fulfilled" when server response 200', async () => {
      mockAxiosAdapter.onGet(`/films`).reply(200);

      await store.dispatch(fetchFilmsAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchFilmsAction.pending.type,
        fetchFilmsAction.fulfilled.type,
      ]);
    });
  });
});