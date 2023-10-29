import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainScreen from '../../../pages/main-screen/main-screen';
import SignIn from '../../../pages/sign-in/sign-in';
import MyList from '../../../pages/my-list/my-list';
import MoviePage from '../../../pages/movie-page/movie-page';
import AddReview from '../../../pages/add-review/add-review';
import Player from '../../../pages/player/player';
import NotFound from '../../../pages/not-found/not-found';
import MoviePageOverview from '../../movie-page/movie-page-overview/movie-page-overview';
import MoviePageDetails from '../../movie-page/movie-page-details/movie-page-details';
import MoviePageReviews from '../../movie-page/movie-page-reviews/movie-page-reviews';
import PrivateRoute from '../private-route/private-route';
import { AuthorizationStatus } from '../../../const';
import { AppProps } from './appProps';


function App({ props }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route
            index
            element={<MainScreen {...props} />}
          />
          <Route
            path='login'
            element={<SignIn />}
          />
          <Route
            path='mylist'
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <MyList {...props} />
              </PrivateRoute>
            }
          />
          <Route path='films/:id/' element={<MoviePage {...props} />}>
            <Route
              path=''
              element={ <MoviePageOverview {...props} /> }
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
            element={<AddReview {...props} />}
          />
          <Route
            path='/player/:id'
            element={<Player {...props}/>}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
