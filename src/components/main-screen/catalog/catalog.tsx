import { Genres } from '../../../const';
import FilmCard from '../film-card/film-card';

type CatalogProps = {
  films: {
    id: string
    name: string
    previewImage: string
    previewVideoLink: string
    genre: string
  }[];
}

function Catalog({ films }: CatalogProps): JSX.Element {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul className="catalog__genres-list">
        {
          Genres.map((genre) =>
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

      <div className="catalog__films-list">
        {
          films.map((film) => (<FilmCard film={film} />))
        }
      </div>

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}

export default Catalog;
