import { useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getFilms, getGenre } from '../../../store/data/common-data/selectors';
import { changeGenre, putGenreFilms } from '../../../store/data/common-data/common-data';
import { Genre } from '../../../types/data-types';
import { getGenres } from '../../../services/component-services/common';

export default function Genres(): JSX.Element {
  const dispatcher = useAppDispatch();
  const curGenre = useAppSelector(getGenre);
  const films = useAppSelector(getFilms);
  const [activeGenre, setGenre] = useState(0);

  const genres = useMemo(() => getGenres(films), [films]);
  const handleGenreChoice = (genre : Genre) => {
    dispatcher(changeGenre({ ...genre }));
    dispatcher(putGenreFilms());
    setGenre(() => genre.id);
  };

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
              onClick={() => handleGenreChoice(genre)}
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
