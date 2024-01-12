import { render, screen } from '@testing-library/react';
import AddReviewPage from './add-review-page';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeEmptyUserData, makeFakeFilmData, makeFakeFilmDetails, makeFakeUserData } from '../../utils/mocks';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { MemoryHistory, createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';

describe('Component: AddReviewPage', () => {
  let mockHistory: MemoryHistory;

  beforeAll(() => {
    mockHistory = createMemoryHistory();
  });

  beforeEach(() => {
    mockHistory.push(AppRoute.AddReview);
  });
  it('should render correct', () => {
    const addreviewText = 'Add review';
    const fakeFilmDetails = makeFakeFilmDetails();
    const { withStoreComponent } = withStore(<AddReviewPage />, {
      FILM: {...makeFakeFilmData(), filmDetails: fakeFilmDetails},
      USER: makeFakeUserData()
    });
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);
    expect(screen.getByText(addreviewText)).toBeInTheDocument();
    expect(screen.getAllByAltText(fakeFilmDetails.name)[0]).toBeInTheDocument();
  });

  it('should trigger redirect to "MoviePage" on button click', async () => {
    const filmText = 'movie';

    const { withStoreComponent } = withStore(
      withHistory(
        <Routes>
          <Route path={AppRoute.Film} element={<span>{filmText}</span>} />
          <Route path={AppRoute.AddReview} element={<AddReviewPage />}/>
        </Routes>,
        mockHistory
      ),
      {
        FILM: makeFakeFilmData(),
        USER: makeEmptyUserData()
      }
    );

    render(withStoreComponent);

    await userEvent.click(
      screen.getByTestId('filmTestId')
    );

    expect(screen.getByText(filmText)).toBeInTheDocument();
  });
});
