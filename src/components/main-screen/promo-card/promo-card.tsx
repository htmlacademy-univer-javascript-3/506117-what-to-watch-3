import HeadUser from '../../common/head/head-user/head-user';
import MoviePageInList from '../../movie-page/movie-page-in-list/movie-page-in-list';

type PromoCardProps = {
  promoInfo: {
    name: string;
    genre: string;
    releaseDate: Date;
    posterPath: string;
    backgroundPath: string;
  };

  userInfo: {
    listCount: number;
    isInList: boolean;
  };
};


function PromoCard({ promoInfo, userInfo }: PromoCardProps): JSX.Element {
  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={promoInfo.backgroundPath} alt={promoInfo.name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <HeadUser userPageHeader={false} />

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={promoInfo.posterPath} alt={`${promoInfo.name} poster`} width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{promoInfo.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{promoInfo.genre}</span>
              <span className="film-card__year">{promoInfo.releaseDate.getFullYear()}</span>
            </p>

            <div className="film-card__buttons">
              <button className="btn btn--play film-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s" href="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>

              <MoviePageInList userInfo={userInfo} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromoCard;
