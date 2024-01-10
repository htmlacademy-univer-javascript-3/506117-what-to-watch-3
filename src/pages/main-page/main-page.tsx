import Footer from '../../components/common/footer/footer';
import Catalog from '../../components/common/catalog/catalog';
import PromoCard from '../../components/main/promo-card/promo-card';
import Genres from '../../components/common/genres/genres';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilmsAction, fetchPromoAction } from '../../store/api-actions';
import { putGenreFilms } from '../../store/data/common-data/common-data';
import { getFilmsLoadingStatus } from '../../store/data/common-data/selectors';
import LoadingScreen from '../../components/common/loading/loading';
import { useEffect } from 'react';


export default function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilmsAction()).then(
      () => dispatch(putGenreFilms())
    );
    dispatch(fetchPromoAction());
  }, [dispatch]);

  const isDataLoading = useAppSelector(getFilmsLoadingStatus);
  if (isDataLoading) {
    return <LoadingScreen />;
  }

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
