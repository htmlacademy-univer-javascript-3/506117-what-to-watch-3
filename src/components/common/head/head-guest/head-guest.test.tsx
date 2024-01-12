import { render, screen } from '@testing-library/react';
import HeadGuest from './head-guest';
import { withHistory, withStore } from '../../../../utils/mock-component';
import userEvent from '@testing-library/user-event';
import { makeEmptyUserData } from '../../../../utils/mocks';
import { AppRoute } from '../../../../const';
import { MemoryHistory, createMemoryHistory } from 'history';
import { Route, Routes } from 'react-router-dom';

describe('Component: HeadGuest', () => {
  let mockHistory: MemoryHistory;

  beforeAll(() => {
    mockHistory = createMemoryHistory();
  });

  beforeEach(() => {
    mockHistory.push(AppRoute.Main);
  });

  it('should render correct', () => {
    const signinText = 'Sign in';
    render(withHistory(<HeadGuest />));
    expect(screen.getByText(signinText)).toBeInTheDocument();
  });

  it('should trigger redirect to "SignInPage" on click', async () => {
    const signInText = 'sign in';

    const { withStoreComponent } = withStore(
      withHistory(
        <Routes>
          <Route path={AppRoute.SignIn} element={<span>{signInText}</span>} />
          <Route path={AppRoute.Main} element={<HeadGuest />}/>
        </Routes>,
        mockHistory
      ),
      {
        USER: makeEmptyUserData()
      }
    );

    render(withStoreComponent);

    await userEvent.click(
      screen.getByRole('button')
    );

    expect(screen.getByText(signInText)).toBeInTheDocument();
  });
});
