import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../../pages/main-page/main-page';
import SignInPage from '../../../pages/sign-in-page/sign-in-page';
import MyListPage from '../../../pages/my-list-page/my-list-page';
import MoviePage from '../../../pages/movie-page/movie-page';
import AddReviewPage from '../../../pages/add-review-page/add-review-page';
import PlayerPage from '../../../pages/player-page/player-page';
import NotFoundPage from '../../../pages/not-found-page/not-found-page';
import MoviePageOverview from '../../movie/movie-overview/movie-overview';
import MoviePageDetails from '../../movie/movie-details/movie-details';
import MoviePageReviews from '../../movie/movie-reviews/movie-reviews';
import PrivateRoute from '../private-route/private-route';
import { AuthorizationStatus } from '../../../const';
import { AppProps } from './appProps';
import LoadingScreen from '../loading/loading';
import { useAppSelector } from '../../../hooks';


function App({ props }: AppProps): JSX.Element {
  const isFilmsDataLoading = useAppSelector((state) => state.isFilmsDataLoading);
  if (isFilmsDataLoading) {
    return <LoadingScreen />;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route
            index
            element={<MainPage {...props} />}
          />
          <Route
            path='login'
            element={<SignInPage />}
          />
          <Route
            path='mylist'
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <MyListPage />
              </PrivateRoute>
            }
          />
          <Route path='films/:id/' element={<MoviePage {...props} />}>
            <Route
              path='overview'
              element={<MoviePageOverview {...props} />}
            />
            <Route
              path='details'
              element={<MoviePageDetails {...props} />}
            />
            <Route
              path='reviews'
              element={<MoviePageReviews {...props} />}
            />
          </Route>
          <Route
            path='films/:id/add-review'
            element={<AddReviewPage {...props} />}
          />
          <Route
            path='/player/:id'
            element={<PlayerPage {...props} />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
