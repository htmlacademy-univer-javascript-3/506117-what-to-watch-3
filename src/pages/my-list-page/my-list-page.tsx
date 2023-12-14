import Footer from '../../components/common/footer/footer';
import Catalog from '../../components/common/catalog/catalog';
import Head from '../../components/common/head/head';
import Logo from '../../components/common/logo/logo';


export default function MyListPage(): JSX.Element {
  return (
    <div className="user-page">
      <Head>
        <Logo isLight={false}/>
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
      </Head>
      <Catalog />
      <Footer />
    </div>
  );
}
