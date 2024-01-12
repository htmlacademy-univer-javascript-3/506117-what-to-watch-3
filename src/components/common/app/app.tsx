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
import { useAppSelector } from '../../../hooks';
import { getAuthorizationStatus } from '../../../store/data/user-data/selectors';


function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  return (
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
            <PrivateRoute authorizationStatus={authorizationStatus}>
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
            <PrivateRoute authorizationStatus={authorizationStatus}>
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
  );
}

export default App;
