import { PropsWithChildren, useEffect, useState } from 'react';
import FilmCard from '../../main/film-card/film-card';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import ShowMore from '../show-more/show-more';
import { showNum } from '../../../const';
import { changeGenre, putGenreFilms } from '../../../store/action';

type CatalogProps = PropsWithChildren;

function Catalog(props: CatalogProps): JSX.Element {
  const { children } = props;
  const films = useAppSelector((state) => state.genreFilms);
  const [limit, setLimit] = useState(showNum);
  const dispatcher = useAppDispatch();

  useEffect(() => {
    dispatcher(changeGenre({ newGenre: { title: 'All genres', id: 0 } }));
    dispatcher(putGenreFilms());
  }, []);


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
