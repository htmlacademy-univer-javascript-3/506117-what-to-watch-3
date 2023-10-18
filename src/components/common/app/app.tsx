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

type AppProps = {
  promoInfo: {
    name: string;
    genre: string;
    releaseDate: Date;
    posterPath: string;
    backgroundPath: string;
  };

  filmsInfo: {
    id: number;
    name: string;
    imagePath: string;
  }[];

  userInfo: {
    listCount: number;
    isInList: boolean;
  };

  rating: {
    mark: number;
    level: string;
    rateCount: number;
  };

  reviewsInfo: {
    id: number;
    text: string;
    author: string;
    rating: number;
    date: Date;
  }[];

  movieInfo: {
    name: string;
    genre: string;
    releaseDate: Date;
    posterPath: string;
    backgroundPath: string;

    movieOverview: {
      description: string;
      director: string;
      starring: string[];
    };

    runTime: string;
  };

  moreLikeThis: {
    name: string;
    id: number;
    imagePath: string;
  }[];
}

function App(props: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<MainScreen {...props} />} />
          <Route path='login' element={<SignIn />} />
          <Route
            path='mylist'
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <MyList listFilms={props.filmsInfo} />
              </PrivateRoute>
            }
          />
          <Route path='films/:id/' element={<MoviePage {...props} />}>
            <Route path='' element={<MoviePageOverview rating={props.rating} movieOverview={props.movieInfo.movieOverview} />} />
            <Route path='details' element={<MoviePageDetails {...props} />} />
            <Route path='reviews' element={<MoviePageReviews {...props} />} />
            <Route path='review' element={<AddReview />} />
          </Route>
          <Route path='/player/:id' element={<Player />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
