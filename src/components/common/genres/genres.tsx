import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { changeGenre, putGenreFilms } from '../../../store/action';


export default function Genres(): JSX.Element {
  const dispatcher = useAppDispatch();
  const curGenre = useAppSelector((state) => state.genre);
  const [activeGenre, setGenre] = useState(0);
  const films = useAppSelector((state) => state.films);
  const filmGenres = films
    .map((f) => f.genre)
    .filter((value, index, array) => array.indexOf(value) === index)
    .map((g, index) => ({ id: index + 1, title: g }));
  const genres = [{ title: 'All genres', id: 0 }].concat(filmGenres);

  useEffect(() => {
    setGenre(() => curGenre.id);
  }, []);

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
                dispatcher(changeGenre({ newGenre: { ...genre } }));
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
