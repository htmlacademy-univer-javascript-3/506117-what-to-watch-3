import { PropsWithChildren, useState } from 'react';
import FilmCard from '../../main/film-card/film-card';
import { useAppSelector } from '../../../hooks';

type CatalogProps = PropsWithChildren;

function Catalog(props: CatalogProps): JSX.Element {
  const { children } = props;
  const films = useAppSelector((state) => state.films);
  const [limit, changeLimit] = useState(8);

  return (
    <section className="catalog">
      {children}
      <div className="catalog__films-list">
        {
          films.slice(0, limit).map((film) => (<FilmCard film={film} key={film.id} />))
        }
      </div>

      <div className="catalog__more">
        <button
          className={limit < films.length ? 'catalog__button' : 'catalog__button--hide'}
          type="button"
          onClick={() => changeLimit((newLimit) => 2 * newLimit)}
        >
          Show more
        </button>
      </div>
    </section>
  );
}

export default Catalog;
