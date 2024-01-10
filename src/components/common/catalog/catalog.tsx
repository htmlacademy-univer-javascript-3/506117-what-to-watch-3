import { PropsWithChildren, useState } from 'react';
import FilmCard from '../../main/film-card/film-card';
import { useAppSelector } from '../../../hooks';
import ShowMore from '../show-more/show-more';
import { SHOW_NUM } from '../../../const';
import { getGenreFilms } from '../../../store/data/common-data/selectors';

type CatalogProps = PropsWithChildren;

export default function Catalog({ children }: CatalogProps): JSX.Element {
  const films = useAppSelector(getGenreFilms);
  const [limit, setLimit] = useState(SHOW_NUM);

  return (
    <section className="catalog">
      {children}
      <div className="catalog__films-list">
        {
          films.slice(0, limit).map((film) => (<FilmCard film={film} key={film.id} />))
        }
      </div>
      {limit < films.length && <ShowMore {...{ limit, setLimit }} />}
    </section>
  );
}
