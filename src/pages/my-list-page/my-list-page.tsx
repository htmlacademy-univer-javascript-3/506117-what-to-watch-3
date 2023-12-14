import Footer from '../../components/common/footer/footer';
import Head from '../../components/common/head/head';
import Logo from '../../components/common/logo/logo';
import Favourites from '../../components/my-list/favourites/favourites';
import ListNum from '../../components/my-list/list-num/list-num';
import { useAppSelector } from '../../hooks';
import { getFavourites } from '../../store/data/user-data/selectors';


export default function MyListPage(): JSX.Element {
  const films = useAppSelector(getFavourites).length;
  return (
    <div className="user-page">
      <Head>
        <Logo isLight={false}/>
        <ListNum num={films}/>
      </Head>
      <Favourites />
      <Footer />
    </div>
  );
}
