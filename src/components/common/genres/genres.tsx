import { useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { Film } from '../../../types/film';
import { getFilms, getGenre } from '../../../store/data/common-data/selectors';
import { changeGenre, putGenreFilms } from '../../../store/data/common-data/common-data';

function getGenres(films: Film[]) {
  const filmGenres = films
    .map((f) => f.genre)
    .filter((value, index, array) => array.indexOf(value) === index)
    .map((g, index) => ({ id: index + 1, title: g }));
  const genres = [{ title: 'All genres', id: 0 }].concat(filmGenres);

  return genres;
}

export default function Genres(): JSX.Element {
  const dispatcher = useAppDispatch();
  const curGenre = useAppSelector(getGenre);
  const films = useAppSelector(getFilms);
  const [activeGenre, setGenre] = useState(0);

  const genres = useMemo(() => getGenres(films), [films]);

  useEffect(() => {
    setGenre(() => curGenre.id);
  }, [curGenre]);

  return (
    <>
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul className="catalog__genres-list">
        {
          genres.map((genre) => (
            <li
              key={genre.id}
              className={`catalog__genres-item${activeGenre === genre.id ? ' catalog__genres-item--active' : ''}`}
              onClick={() => {
                dispatcher(changeGenre({ ...genre }));
                dispatcher(putGenreFilms());
                setGenre(() => genre.id);
              }}
            >
              <button className="catalog__genres-link">{genre.title}</button>
            </li>
          )
          )
        }
      </ul>
    </>
  );
}
