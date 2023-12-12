import Footer from '../../components/common/footer/footer';
import Catalog from '../../components/common/catalog/catalog';
import PromoCard from '../../components/main/promo-card/promo-card';
import Genres from '../../components/common/genres/genres';


export default function MainPage(): JSX.Element {
  return (
    <>
      <PromoCard />
      <div className="page-content">
        <Catalog >
          <Genres />
        </Catalog>
        <Footer />
      </div>
    </>
  );
}
