import { Film } from '../../types/data-types';

export function getGenres(films: Film[]) {
  const filmGenres = films
    .map((f) => f.genre)
    .filter((value, index, array) => array.indexOf(value) === index)
    .map((g, index) => ({ id: index + 1, title: g }));
  const genres = [{ title: 'All genres', id: 0 }].concat(filmGenres);
  return genres;
}
