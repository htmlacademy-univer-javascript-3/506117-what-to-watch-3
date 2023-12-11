import Footer from '../../components/common/footer/footer';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
import FilmCard from '../../components/main/film-card/film-card';
import Head from '../../components/common/head/head';
import MyList from '../../components/common/my-list/my-list';

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
                <MyList />
                <Link className="btn film-card__button" to={`/films/${film.id}/review`}>Add review</Link>
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
                  <li className="film-nav__item">
                    <NavLink to={`/films/${id || ''}/overview`} className="film-nav__link">
                      Overview
                    </NavLink>
                  </li>
                  <li className="film-nav__item">
                    <NavLink to={`/films/${id || ''}/details`} className="film-nav__link">
                      Details
                    </NavLink>
                  </li>
                  <li className="film-nav__item">
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
              similar.map((filmItem) => (<FilmCard film={filmItem} key={film.id} />))
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
