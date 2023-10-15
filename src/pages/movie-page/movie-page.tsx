import HeadUser from '../../components/common/head/head-user/head-user';
import Footer from '../../components/common/footer/footer';

type MoviePageProps = {
  movieInfo: {
    name: string;
    genre: string;
    releaseDate: Date;
    posterPath: string;
    backgroundPath: string;
    description: string;
    director: string;
    starring: string[];
  };

  moreLikeThis: { name: string; id: number; imagePath: string }[];

  rating: {
    mark: number;
    level: string;
    rateCount: number;
  };

  userInfo: {
    listCount: number;
  };
};

function MoviePage({ movieInfo, moreLikeThis, rating, userInfo }: MoviePageProps) {
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <HeadUser />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{movieInfo.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{movieInfo.genre}</span>
                <span className="film-card__year">{movieInfo.releaseDate.toISOString()}</span>
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
                  <li className="film-nav__item film-nav__item--active">
                    <a href="#" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">{rating.mark.toLocaleString()}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">{rating.level}</span>
                  <span className="film-rating__count">{rating.rateCount} ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                {movieInfo.description}

                <p className="film-card__director"><strong>Director: {movieInfo.director}</strong></p>

                <p className="film-card__starring"><strong>Starring: {movieInfo.starring.join(' ')} and other</strong></p>
              </div>
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
