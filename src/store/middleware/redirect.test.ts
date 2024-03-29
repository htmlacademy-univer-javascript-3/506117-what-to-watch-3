import { MockStore, configureMockStore } from '@jedmao/redux-mock-store';
import { redirect } from './redirect';
import browserHistory from '../../browser-history';
import { AnyAction } from '@reduxjs/toolkit';
import { redirectToRoute } from '../action';
import { AppRoute } from '../../const';
import { State } from '../../types/state';

vi.mock('../../browser-history', () => ({
  default: {
    location: { pathname: ''},
    push(path: string) {
      this.location.pathname = path;
    }
  }
}));

describe('Redirect middlewareElements', () => {
  let store: MockStore;

  beforeAll(() => {
    const middlewareElements = [redirect];
    const mockStoreCreator = configureMockStore<State, AnyAction>(middlewareElements);
    store = mockStoreCreator();
  });

  beforeEach(() => {
    browserHistory.push('');
  });

  it('should redirect to "/login" with redirectToRoute action', () => {
    const redirectAction = redirectToRoute(AppRoute.SignIn);
    store.dispatch(redirectAction);
    expect(browserHistory.location.pathname).toBe(AppRoute.SignIn);
  });

  it('should not redirect to 404 page with empty action', () => {
    const emptyAction = { type: '', payload: AppRoute.NotFound };
    store.dispatch(emptyAction);
    expect(browserHistory.location.pathname).not.toBe(AppRoute.NotFound);
  });
});
