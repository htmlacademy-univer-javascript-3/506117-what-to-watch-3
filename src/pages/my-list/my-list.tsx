import HeadUser from '../../components/common/head/head-user/head-user';
import Footer from '../../components/common/footer/footer';
import Catalog from '../../components/main-screen/catalog/catalog';

type MyListProps = {
  films: {
    id: string
    name: string
    previewImage: string
    previewVideoLink: string
    genre: string
}[];
}


function MyList({ films }: MyListProps): JSX.Element {
  return (
    <div className="user-page">
      <HeadUser userPageHeader />
      <Catalog films={films} />
      <Footer />
    </div>
  );
}

export default MyList;
