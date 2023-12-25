import Footer from '../../components/common/footer/footer';
import Head from '../../components/common/head/head';
import Logo from '../../components/common/logo/logo';
import Favourites from '../../components/my-list/favourites/favourites';
import { useAppSelector } from '../../hooks';
import { getFavourites } from '../../store/data/user-data/selectors';


export default function MyListPage(): JSX.Element {
  const films = useAppSelector(getFavourites);
  return (
    <div className="user-page">
      <Head userPageHeader>
        <Logo isLight={false}/>
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{films.length}</span></h1>
      </Head>
      <Favourites />
      <Footer />
    </div>
  );
}
