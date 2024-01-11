import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { fetchFavouriteFilmsAction } from '../../../store/api-actions';
import { getFavourites } from '../../../store/data/user-data/selectors';
import FilmCard from '../../main/film-card/film-card';

export default function Favourites(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavouriteFilmsAction());
  }, [dispatch]);

  const favourites = useAppSelector(getFavourites);

  return (
    <section className="catalog" data-testid='favouritesTestId'>
      <div className="catalog__films-list">
        {favourites.map((f) => <FilmCard film={f} key={f.id} />)}
      </div>
    </section>
  );
}
