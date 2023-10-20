import HeadUser from '../../components/common/head/head-user/head-user';
import Footer from '../../components/common/footer/footer';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';

type MoviePageProps = {
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

  };

  moreLikeThis: {
    name: string;
    id: number;
    imagePath: string;
  }[];

  userInfo: {
    listCount: number;
    isInList: boolean;
  };
};

function MoviePage({ movieInfo, moreLikeThis, userInfo }: MoviePageProps) {
  const { id } = useParams();
  const { pathname } = useLocation();
  const setLiState = (path: string) => `film-nav__item ${pathname === path ? 'film-nav__item--active' : ''}`;

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <HeadUser userPageHeader={false} />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{movieInfo.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{movieInfo.genre}</span>
                <span className="film-card__year">{movieInfo.releaseDate.getFullYear()}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s" href="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add" href="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">{userInfo.listCount}</span>
                </button>
                <a href="add-review.html" className="btn film-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
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
              moreLikeThis.map(
                (film) =>
                  (
                    <article key={film.id} className="small-film-card catalog__films-card">
                      <div className="small-film-card__image">
                        <img src={film.imagePath} alt={film.name} width="280" height="175" />
                      </div>
                      <h3 className="small-film-card__title">
                        <a className="small-film-card__link" href="film-page.html">{film.name}</a>
                      </h3>
                    </article>
                  )
              )
            }
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MoviePage;
