import Catalog from '../../components/main-screen/catalog/catalog';
import PromoCard from '../../components/main-screen/promo-card/promo-card';

type MainScreenProps = {
  promoInfo: {
    name: string;
    genre: string;
    releaseDate: Date;
  };
}

function MainScreen({promoInfo}: MainScreenProps): JSX.Element {
  return (
    <>
      <PromoCard
        promoInfo={promoInfo}
      />

      <div className="page-content">
        <Catalog />

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MainScreen;
