import Footer from '../../components/common/footer/footer';
import Catalog from '../../components/common/catalog/catalog';
import PromoCard from '../../components/main-screen/promo-card/promo-card';
import { MainScreenProps } from './mainScreenProps';


function MainScreen(
  props: MainScreenProps
): JSX.Element {
  return (
    <>
      <PromoCard {...props} />
      <div className="page-content">
        <Catalog {...{ ...props, ...{ showGenresFilter: true } }} />
        <Footer />
      </div>
    </>
  );
}

export default MainScreen;
