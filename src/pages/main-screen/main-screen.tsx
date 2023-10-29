import Footer from '../../components/common/footer/footer';
import Catalog from '../../components/main-screen/catalog/catalog';
import PromoCard from '../../components/main-screen/promo-card/promo-card';



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
