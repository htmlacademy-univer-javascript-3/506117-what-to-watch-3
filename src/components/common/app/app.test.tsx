import { render, screen} from '@testing-library/react';
import { MemoryHistory, createMemoryHistory } from 'history';
import App from './app';
import { withHistory, withStore } from '../../../utils/mock-component';
import { makeEmptyErrorData, makeEmptyUserData, makeFakeCommonData, makeFakeFilmData, makeFakePromo, makeFakeUserData } from '../../../utils/mocks';
import { AppRoute } from '../../../const';

describe('Application Routing', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render "MainPage" when user navigate to "/"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const fakePromo = makeFakePromo();
    const { withStoreComponent } = withStore(withHistoryComponent, {
        DATA: {...makeFakeCommonData(), promo: fakePromo},
        FILM: makeFakeFilmData(),
        USER: makeFakeUserData(),
        ERROR: makeEmptyErrorData()
    });
    mockHistory.push(AppRoute.Main);

    render(withStoreComponent);

    expect(screen.getByText(fakePromo.name)).toBeInTheDocument();
    expect(screen.getByAltText(fakePromo.name)).toBeInTheDocument();
    expect(screen.getByTestId('logo-light')).toBeInTheDocument();
  });

  it('should render "SignInPage" when user navigate to "/login"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, {
        DATA: makeFakeCommonData(),
        FILM: makeFakeFilmData(),
        USER: makeEmptyUserData(),
        ERROR: makeEmptyErrorData()
    });
    mockHistory.push(AppRoute.SignIn);

    render(withStoreComponent);

    expect(screen.getAllByText('Sign in')[0]).toBeInTheDocument();
    expect(screen.getByLabelText('Email address')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  it('should render "MyListPage" when user navigate to "/mylist"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, {
      USER: makeFakeUserData()
    });
    mockHistory.push(AppRoute.MyList);

    render(withStoreComponent);

    expect(screen.getByText('My list')).toBeInTheDocument();
    expect(screen.getByTestId('favouritesTestId')).toBeInTheDocument();
  });

  it('should render "MoviePage" when user navigate to "/films/:id/:tab?"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const filmData = makeFakeFilmData();
    const { withStoreComponent } = withStore(withHistoryComponent, {
      FILM: filmData,
      USER: makeFakeUserData(),
      ERROR: makeEmptyErrorData()
    });
    mockHistory.push(`/films/${filmData.filmDetails?.id}/reviews`);

    render(withStoreComponent);

    expect(screen.getByText(filmData.filmDetails?.name || '')).toBeInTheDocument();
    expect(screen.getAllByAltText(filmData.filmDetails?.name || '')[0]).toBeInTheDocument();
  });

  it('should render "AddReviewPage" when user navigate to "/films/:id/review" route', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const filmData = makeFakeFilmData();
    const { withStoreComponent } = withStore(withHistoryComponent, {
        FILM: filmData,
        USER: makeFakeUserData()
    });
    mockHistory.push(`/films/${filmData.filmDetails?.id}/review`);

    render(withStoreComponent);

    expect(screen.getByText('Add review')).toBeInTheDocument();
    expect(screen.getAllByAltText(filmData.filmDetails?.name || '')[0]).toBeInTheDocument();
  });

  it('should render "PlayerPage" when user navigate to "/player/:id" route', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const filmData = makeFakeFilmData();
    const { withStoreComponent } = withStore(withHistoryComponent, {
        FILM: filmData,
        USER: makeFakeUserData(),
        ERROR: makeEmptyErrorData()
    });
    mockHistory.push(`/player/${filmData.filmDetails?.id}`);

    HTMLMediaElement.prototype.pause = vi.fn();
    HTMLMediaElement.prototype.load = vi.fn();
    render(withStoreComponent);

    expect(screen.getByText('Full screen')).toBeInTheDocument();
    expect(screen.getByTestId('playerTestId')).toBeInTheDocument();
  });

  it('should render "NotFoundPage" when user navigate to non-existent route', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, {
        USER: makeEmptyUserData()
    });
    const unknownRoute = '/unknown-route';
    mockHistory.push(unknownRoute);

    render(withStoreComponent);

    expect(screen.getByText('Go back to main page.')).toBeInTheDocument();
  });
});