import HeadGuest from '../../common/head/head-guest/head-guest';
import HeadUser from '../../common/head/head-user/head-user';

type PromoCardProps = {
  promo: {
    id: string
    name: string
    posterImage: string
    backgroundImage: string
    videoLink: string
    genre: string
    released: number
    isFavorite: boolean
};
};


function PromoCard({ promo }: PromoCardProps): JSX.Element {
  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={promo.backgroundImage} alt={promo.name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <HeadUser userPageHeader={false}/>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={promo.posterImage} alt={`${promo.name} poster`} width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{promo.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{promo.genre}</span>
              <span className="film-card__year">{promo.released}</span>
            </p>

            <div className="film-card__buttons">
              <button className="btn btn--play film-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s" href="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>

              {/* <MoviePageInList userInfo={userInfo} /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromoCard;
