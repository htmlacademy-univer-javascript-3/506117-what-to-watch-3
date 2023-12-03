import { PropsWithChildren } from 'react';
import FilmCard from '../../main/film-card/film-card';
import { useAppSelector } from '../../../hooks';

type CatalogProps = PropsWithChildren;

function Catalog(props: CatalogProps): JSX.Element {
  const { children } = props;
  const films = useAppSelector((state) => state.films);

  return (
    <section className="catalog">
      {children}
      <div className="catalog__films-list">
        {
          films.map((film) => (<FilmCard film={film} key={film.id} />))
        }
      </div>

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}

export default Catalog;
