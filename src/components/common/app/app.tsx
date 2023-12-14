import { Route, Routes } from 'react-router-dom';
import MainPage from '../../../pages/main-page/main-page';
import SignInPage from '../../../pages/sign-in-page/sign-in-page';
import MyListPage from '../../../pages/my-list-page/my-list-page';
import MoviePage from '../../../pages/movie-page/movie-page';
import AddReviewPage from '../../../pages/add-review-page/add-review-page';
import PlayerPage from '../../../pages/player-page/player-page';
import NotFoundPage from '../../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { AppRoute } from '../../../const';
import LoadingScreen from '../loading/loading';
import { useAppSelector } from '../../../hooks';
import HistoryRouter from '../../history-route/history-route';
import browserHistory from '../../../browser-history';
import { getFilmsLoadingStatus } from '../../../store/data/common-data/selectors';


function App(): JSX.Element {
  const isDataLoading = useAppSelector(getFilmsLoadingStatus);
  if (isDataLoading) {
    return <LoadingScreen />;
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main}>
          <Route
            index
            element={<MainPage />}
          />
          <Route
            path={AppRoute.SignIn}
            element={<SignInPage />}
          />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute>
                <MyListPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Film}
            element={<MoviePage />}
          />
          <Route
            path={AppRoute.AddReview}
            element={
              <PrivateRoute>
                <AddReviewPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Player}
            element={<PlayerPage />}
          />
          <Route
            path={AppRoute.NotFound}
            element={<NotFoundPage />}
          />
        </Route>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
