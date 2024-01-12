import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../../utils/mock-component';
import { makeFakeFilmData, makeFakeFilmDetails } from '../../../utils/mocks';
import MovieTabs from './movie-tabs';
import userEvent from '@testing-library/user-event';

describe('Component: MovieTabs', () => {
  it('should render correct without error', () => {
    const tabsTestId = 'tabsTestId';
    const fakeFilmDetails = makeFakeFilmDetails();
    const preparedComponent = withHistory(<MovieTabs film={fakeFilmDetails} />);
    render(preparedComponent);

    expect(screen.getByTestId(tabsTestId)).toBeInTheDocument();
  });

  it('should render tab "MovieReviews" on corresponding tab choice', async () => {
    const reviewsTestId = 'reviewsTestId';
    const fakeFilmDetails = makeFakeFilmDetails();
    const { withStoreComponent } = withStore(<MovieTabs film={fakeFilmDetails} />, {
      FILM: { ...makeFakeFilmData(), filmDetails: fakeFilmDetails }
    });
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);

    await userEvent.click(
      screen.getByTestId('tabTestId-reviews')
    );

    expect(screen.getByTestId(reviewsTestId)).toBeInTheDocument();
  });
});
