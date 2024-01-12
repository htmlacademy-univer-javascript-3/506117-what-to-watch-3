import { render, screen } from '@testing-library/react';
import MainPage from './main-page';
import { makeFakeCommonData, makeFakeFilmData, makeFakeUserData } from '../../utils/mocks';
import { withHistory, withStore } from '../../utils/mock-component';

describe('Component: MainPage', () => {
  it('should render correct', () => {
    const mainPageTestId = 'mainPageTestId';
    const { withStoreComponent } = withStore(<MainPage />, {
      FILM: makeFakeFilmData(),
      USER: makeFakeUserData(),
      DATA: makeFakeCommonData()
    });
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);
    expect(screen.getByTestId(mainPageTestId)).toBeInTheDocument();
  });

  it('should render "LoadingScreen" on data loading', () => {
    const { withStoreComponent } = withStore(<MainPage />, {
      FILM: makeFakeFilmData(),
      USER: makeFakeUserData(),
      DATA: { ...makeFakeCommonData(), isFilmsDataLoading: true }
    });
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);
    expect(screen.getByTestId('hourglass')).toBeInTheDocument();
  });
});
