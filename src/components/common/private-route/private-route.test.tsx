import { MemoryHistory, createMemoryHistory } from 'history';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './private-route';
import { render, screen } from '@testing-library/react';
import { AppRoute, AuthorizationStatus } from '../../../const';
import { withHistory, withStore } from '../../../utils/mock-component';
import { makeFakeCommonData, makeFakeUserData } from '../../../utils/mocks';

describe('Component: PrivateRoute', () => {
  let mockHistory: MemoryHistory;

  beforeAll(() => {
    mockHistory = createMemoryHistory();
  });

  beforeEach(() => {
    mockHistory.push(AppRoute.AddReview);
  });

  it('should render component for public route, when user not authorized', () => {
    const expectedText = 'public route';
    const notExpectedText = 'private route';
    const { withStoreComponent } = withStore(
      withHistory(
        <Routes>
          <Route path={AppRoute.SignIn} element={<span>{expectedText}</span>} />
          <Route path={AppRoute.AddReview} element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <span>{notExpectedText}</span>
            </PrivateRoute>
          }
          />
        </Routes>,
        mockHistory
      ),
      {
        DATA: makeFakeCommonData(),
        USER: makeFakeUserData()
      }
    );

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.queryByText(notExpectedText)).not.toBeInTheDocument();
  });

  it('should render component for private route, when user authorized', () => {
    const notExpectedText = 'public route';
    const expectedText = 'private route';
    const { withStoreComponent } = withStore(
      withHistory(
        <Routes>
          <Route path={AppRoute.SignIn} element={<span>{notExpectedText}</span>} />
          <Route path={AppRoute.AddReview} element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <span>{expectedText}</span>
            </PrivateRoute>
          }
          />
        </Routes>,
        mockHistory
      ),
      {
        DATA: makeFakeCommonData(),
        USER: makeFakeUserData()
      }
    );

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.queryByText(notExpectedText)).not.toBeInTheDocument();
  });
});
