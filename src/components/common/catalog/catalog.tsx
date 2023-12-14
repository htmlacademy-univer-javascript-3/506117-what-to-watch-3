import { PropsWithChildren, useEffect, useState } from 'react';
import FilmCard from '../../main/film-card/film-card';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import ShowMore from '../show-more/show-more';
import { SHOW_NUM } from '../../../const';
import { putGenreFilms } from '../../../store/data/common-data/common-data';
import { getGenreFilms } from '../../../store/data/common-data/selectors';

type CatalogProps = PropsWithChildren;

function Catalog(props: CatalogProps): JSX.Element {
  const { children } = props;
  const films = useAppSelector(getGenreFilms);
  const [limit, setLimit] = useState(SHOW_NUM);
  const dispatcher = useAppDispatch();

  useEffect(() => {
    dispatcher(putGenreFilms());
  }, [dispatcher]);

  return (
    <section className="catalog">
      {children}
      <div className="catalog__films-list">
        {
          films.slice(0, limit).map((film) => (<FilmCard film={film} key={film.id} />))
        }
      </div>
      {limit < films.length && <ShowMore {...{ limit, setLimit }} /> }
    </section>
  );
}

export default Catalog;
