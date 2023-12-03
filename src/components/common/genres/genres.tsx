import { useState } from 'react';
import { useAppDispatch } from '../../../hooks';
import { changeGenre, putGenreFilms } from '../../../store/action';
import { films } from '../../../mocks/films';


export default function Genres(): JSX.Element {
  const dispatcher = useAppDispatch();
  const [activeGenre, setGenre] = useState(0);
  const filmGenres = films
    .map((f) => f.genre)
    .filter((value, index, array) => array.indexOf(value) === index)
    .map((g, index) => ({ name: g, id: index + 1 }));
  const genres = [{ name: 'All genres', id: 0 }].concat(filmGenres);

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
                dispatcher(changeGenre({ newGenre: genre.name }));
                dispatcher(putGenreFilms());
                setGenre(() => genre.id);
              }}
            >
              <button className="catalog__genres-link">{genre.name}</button>
            </li>
          )
          )
        }
      </ul>
    </>
  );
}
