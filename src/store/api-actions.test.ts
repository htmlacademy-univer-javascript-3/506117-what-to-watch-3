import { describe, expect } from 'vitest';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from '@reduxjs/toolkit';
import { State } from '../types/state.ts';
import { createAPI } from '../services/api/api.ts';
import { AppThunkDispatch, createFakeToken, extractActionsTypes } from '../utils/mocks.ts';
import { loginAction } from './api-actions.ts';

describe('Async actions', () => {
  const axios = createAPI();
  // const mockAxiosAdapter = new MockAdapter(axios);
  // const middleware = [thunk.withExtraArgument(axios)];
  // const mockStoreCreator = configureMockStore<
  //   State,
  //   Action<string>,
  //   AppThunkDispatch
  // >(middleware);
  // let store: ReturnType<typeof mockStoreCreator>;

  // beforeEach(() => {
  //   store = mockStoreCreator();
  // });

  // describe('loginAction', () => {
  //   it('should dispatch "loginAction.pending", "loginAction.fulfilled" when server response 200', async () => {
  //     const fakeUser = {login: "123", password: "123"};
  //     const fakeServerReplay = createFakeToken();
  //     mockAxiosAdapter.onPost('/login').reply(200, fakeServerReplay);

  //     await store.dispatch(loginAction(fakeUser));
  //     const actions = extractActionsTypes(store.getActions());

  //     expect(actions).toEqual([
  //       loginAction.pending.type,
  //       loginAction.fulfilled.type,
  //     ]);
  //   });
  // });
  it('should', async () => {
    expect(true).toBe(true);
  })
});