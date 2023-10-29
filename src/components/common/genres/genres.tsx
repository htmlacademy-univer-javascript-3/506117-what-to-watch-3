import { genres } from '../../../const';

export default function Genres(): JSX.Element {
  return (
    <>
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul className="catalog__genres-list">
        {
          genres.map((genre) =>
            (
              genre.id === 0 ?
                <li key={genre.id} className="catalog__genres-item catalog__genres-item--active">
                  <a href="#" className="catalog__genres-link">{genre.name}</a>
                </li> :
                <li key={genre.id} className="catalog__genres-item">
                  <a href="#" className="catalog__genres-link">{genre.name}</a>
                </li>
            )
          )
        }
      </ul>
    </>
  );
}
