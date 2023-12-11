import Footer from '../../components/common/footer/footer';
import Catalog from '../../components/common/catalog/catalog';
import Head from '../../components/common/head/head';


export default function MyListPage(): JSX.Element {
  return (
    <div className="user-page">
      <Head />
      <Catalog />
      <Footer />
    </div>
  );
}
