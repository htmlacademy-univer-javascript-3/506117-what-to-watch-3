import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../../../utils/mock-component';
import { extractActionsTypes, makeFakeUserData } from '../../../../utils/mocks';
import HeadUser from './head-user';
import userEvent from '@testing-library/user-event';
import { logoutAction } from '../../../../store/api-actions';
import { APIRoute, AppRoute } from '../../../../const';
import { MemoryHistory, createMemoryHistory } from 'history';
import { Route, Routes } from 'react-router-dom';

describe('Component: HeadUser', () => {
  let mockHistory: MemoryHistory;

  beforeAll(() => {
    mockHistory = createMemoryHistory();
  });

  beforeEach(() => {
    mockHistory.push(AppRoute.Main);
  });

  it('should render correct', () => {
    const signoutText = 'Sign out';
    const avatarAltText = 'User avatar';
    const { withStoreComponent } = withStore(<HeadUser userPageHeader />, {
      USER: makeFakeUserData()
    });
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);

    expect(screen.getByText(signoutText)).toBeInTheDocument();
    expect(screen.getByAltText(avatarAltText)).toBeInTheDocument();
  });

  it('should sign out correct', async () => {
    const { withStoreComponent, mockStore, mockAxiosAdapter } = withStore(<HeadUser userPageHeader />, {
      USER: makeFakeUserData()
    });
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);

    mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204, []);

    await userEvent.click(
      screen.getByRole('button')
    );

    const actions = extractActionsTypes(mockStore.getActions());

    expect(actions).toEqual([
      logoutAction.pending.type,
      logoutAction.fulfilled.type
    ]);
  });

  it('should trigger redirect to "MyListPage" on avatar click', async () => {
    const mylistText = 'my list';

    const { withStoreComponent } = withStore(
      withHistory(
        <Routes>
          <Route path={AppRoute.MyList} element={<span>{mylistText}</span>} />
          <Route path={AppRoute.Main} element={<HeadUser userPageHeader />}/>
        </Routes>,
        mockHistory
      ),
      {
        USER: makeFakeUserData()
      }
    );

    render(withStoreComponent);

    await userEvent.click(
      screen.getByAltText('User avatar')
    );

    expect(screen.getByText(mylistText)).toBeInTheDocument();
  });
});
