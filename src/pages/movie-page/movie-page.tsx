import Footer from '../../components/common/footer/footer';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import FilmCard from '../../components/main/film-card/film-card';
import Head from '../../components/common/head/head';
import MyList from '../../components/common/my-list/my-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilmDetailsAction, fetchSimilarFilmsAction } from '../../store/api-actions';
import MovieTabs from '../../components/movie/movie-tabs/movie-tabs';
import { useEffect } from 'react';
import { AppRoute, AuthorizationStatus } from '../../const';

function MoviePage() {
  const { id } = useParams();
  const dispatcher = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    dispatcher(fetchFilmDetailsAction({ id: location.pathname.split('/')[2] }));
    dispatcher(fetchSimilarFilmsAction({ id: location.pathname.split('/')[2] }));
  }, [dispatcher, location]);

  const film = useAppSelector((state) => state.filmDetails);
  const similarFilms = useAppSelector((state) => state.similarFilms);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const error = useAppSelector((state) => state.userError);

  if (error?.errorType === 'COMMON_ERROR') {
    navigate(AppRoute.NotFound);
  }

  if (id === undefined || film === null) {
    return <p></p>;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Head />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link className="btn btn--play film-card__button" to={`/player/${film.id}`}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s" href="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                {
                  authorizationStatus === AuthorizationStatus.Auth &&
                  <>
                    <MyList />
                    <Link className="btn film-card__button" to={`/films/${film.id}/review`}>Add review</Link>
                  </>
                }
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327" />
            </div>
            <MovieTabs film={film} location={location}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__films-list">
            {
              similarFilms.slice(0, 4).map((f) => (<FilmCard film={f} key={f.id} />))
            }
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
// done tabs
export default MoviePage;
