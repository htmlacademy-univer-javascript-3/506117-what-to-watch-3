import { PropsWithChildren, useState } from 'react';
import FilmCard from '../../main/film-card/film-card';
import { useAppSelector } from '../../../hooks';
import ShowMore from '../show-more/show-more';
import { showNum } from '../../../const';

type CatalogProps = PropsWithChildren;

function Catalog(props: CatalogProps): JSX.Element {
  const { children } = props;
  const films = useAppSelector((state) => state.films);
  const [limit, setLimit] = useState(showNum);

  return (
    <section className="catalog">
      {children}
      <div className="catalog__films-list">
        {
          films.slice(0, limit).map((film) => (<FilmCard film={film} key={film.id} />))
        }
      </div>

      {limit < films.length ? <ShowMore {...{ limit, setLimit }} /> : <></>}
    </section>
  );
}

export default Catalog;
