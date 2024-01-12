import { render, screen } from '@testing-library/react';
import { makeEmptyErrorData, makeEmptyUserData, makeFakeCommonData, makeFakeFilmData, makeFakeUserData } from '../../utils/mocks';
import { withHistory, withStore } from '../../utils/mock-component';
import MoviePage from './movie-page';
import { MemoryHistory, createMemoryHistory } from 'history';
import { AppRoute } from '../../const';
import { Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Component: MoviePage', () => {
  let mockHistory: MemoryHistory;

  beforeAll(() => {
    mockHistory = createMemoryHistory();
  });

  beforeEach(() => {
    mockHistory.push(AppRoute.Film);
  });

  it('should render correct', () => {
    const moreLikeThisText = 'More like this';
    const { withStoreComponent } = withStore(<MoviePage />, {
      FILM: makeFakeFilmData(),
      USER: makeFakeUserData(),
      DATA: makeFakeCommonData(),
      ERROR: {
        message: '',
        errorType: '',
        details: []
      }
    });
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);
    expect(screen.getByText(moreLikeThisText)).toBeInTheDocument();
  });

  it('should render "MyList" component and "Add review" button if user is authorized', () => {
    const addReviewText = 'Add review';
    const myListTestId = 'myListTestId';
    const { withStoreComponent } = withStore(<MoviePage />, {
      FILM: makeFakeFilmData(),
      USER: makeFakeUserData(),
      DATA: makeFakeCommonData(),
      ERROR: {
        message: '',
        errorType: '',
        details: []
      }
    });
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);
    expect(screen.getByText(addReviewText)).toBeInTheDocument();
    expect(screen.getByTestId(myListTestId)).toBeInTheDocument();
  });

  it('should trigger redirect to "Player" on click', async () => {
    const playerText = 'player';

    const { withStoreComponent } = withStore(
      withHistory(
        <Routes>
          <Route path={AppRoute.Player} element={<span>{playerText}</span>} />
          <Route path={AppRoute.Film} element={<MoviePage />}/>
        </Routes>,
        mockHistory
      ),
      {
        FILM: makeFakeFilmData(),
        USER: makeEmptyUserData(),
        ERROR: makeEmptyErrorData()
      }
    );

    render(withStoreComponent);

    await userEvent.click(
      screen.getByText('Play')
    );

    expect(screen.getByText(playerText)).toBeInTheDocument();
  });
});
