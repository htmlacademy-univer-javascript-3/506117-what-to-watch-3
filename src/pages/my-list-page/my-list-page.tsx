import HeadUser from '../../components/common/head/head-user/head-user';
import Footer from '../../components/common/footer/footer';
import Catalog from '../../components/common/catalog/catalog';


export default function MyListPage(): JSX.Element {
  return (
    <div className="user-page">
      <HeadUser userPageHeader />
      <Catalog />
      <Footer />
    </div>
  );
}
