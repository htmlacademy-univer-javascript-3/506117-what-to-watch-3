import Footer from '../../components/common/footer/footer';
import Catalog from '../../components/main-screen/catalog/catalog';
import PromoCard from '../../components/main-screen/promo-card/promo-card';

type MainScreenProps = {
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
  };
}

function MainScreen(
  props: MainScreenProps
): JSX.Element {
  return (
    <>
      <PromoCard {...props}/>

      <div className="page-content">
        <Catalog {...props}/>
        <Footer />        
      </div>
    </>
  );
}

export default MainScreen;
