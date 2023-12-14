import { Link } from 'react-router-dom';
import Head from '../../common/head/head';
import Logo from '../../common/logo/logo';
import MyList from '../../common/my-list/my-list';
import { useAppSelector } from '../../../hooks';
import { AuthorizationStatus } from '../../../const';
import { memo } from 'react';

function PromoCard(): JSX.Element {
  const promo = useAppSelector((state) => state.promo);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  if (promo === null) {
    return <section className="film-card"></section>;
  }

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={promo.backgroundImage} alt={promo.name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>
      <Head><Logo isLight={false} /></Head>

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
              <Link className="btn btn--play film-card__button" to={`/player/${promo.id}/`}>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s" href="#play-s"></use>
                </svg>
                <span>Play</span>
              </Link>
              {authorizationStatus === AuthorizationStatus.Auth && <MyList />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(PromoCard);
