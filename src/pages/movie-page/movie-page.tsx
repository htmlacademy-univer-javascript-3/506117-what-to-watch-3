import HeadUser from '../../components/common/head/head-user/head-user';
import Footer from '../../components/common/footer/footer';
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import FilmCard from '../../components/main-screen/film-card/film-card';

type MoviePageProps = {
  film: {
    id: string;
    name: string;
    posterImage: string;
    backgroundImage: string;
    backgroundColor: string;
    videoLink: string;
    description: string;
    rating: number;
    scoresCount: number;
    director: string;
    starring: string[];
    runTime: number;
    genre: string;
    released: number;
    isFavorite: boolean;
  };

  similar: {
    id: string;
    name: string;
    previewImage: string;
    previewVideoLink: string;
    genre: string;
  }[];
};

function MoviePage({ film, similar }: MoviePageProps) {
  const { id } = useParams();
  const { pathname } = useLocation();
  const setLiState = (path: string) => `film-nav__item ${pathname === path ? 'film-nav__item--active' : ''}`;

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <HeadUser userPageHeader={false} />

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
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add" href="#add"></use>
                  </svg>
                  <span>My list</span>
                  {/* <span className="film-card__count">{userInfo.listCount}</span> */}
                </button>
                <Link className="btn film-card__button" to={`/films/${film.id}/add-review`}>Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className={setLiState(`/films/${id || ''}/`)}>
                    <NavLink to={`/films/${id || ''}/`} className="film-nav__link">
                      Overview
                    </NavLink>
                  </li>
                  <li className={setLiState(`/films/${id || ''}/details`)}>
                    <NavLink to={`/films/${id || ''}/details`} className="film-nav__link">
                      Details
                    </NavLink>
                  </li>
                  <li className={setLiState(`/films/${id || ''}/reviews`)}>
                    <NavLink to={`/films/${id || ''}/reviews`} className="film-nav__link">
                      Reviews
                    </NavLink>
                  </li>
                </ul>
              </nav>

              <Outlet />

            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__films-list">
            {
              similar.map((filmItem) => (<FilmCard film={ filmItem } />))
            }
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MoviePage;
