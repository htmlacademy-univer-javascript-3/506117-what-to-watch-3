import { Genres } from '../../../const';

type CatalogProps = {
  filmsInfo: {
    id: number;
    name: string;
    imagePath: string;
  }[];
}

function Catalog({ filmsInfo }: CatalogProps): JSX.Element {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul className="catalog__genres-list">
        <li className="catalog__genres-item catalog__genres-item--active">
          <a href="#" className="catalog__genres-link">All genres</a>
        </li>
        {
          Genres.map((genre) =>
            (
              <li key={0} className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">{genre}</a>
              </li>
            )
          )
        }
      </ul>

      <div className="catalog__films-list">
        {
          filmsInfo.map((film) =>
            (
              <article key={film.id} className="small-film-card catalog__films-card">
                <div className="small-film-card__image">
                  <img src={film.imagePath} alt={film.name} width="280" height="175" />
                </div>
                <h3 className="small-film-card__title">
                  <a className="small-film-card__link" href="film-page.html">{film.name}</a>
                </h3>
              </article>
            )
          )
        }
      </div>

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}

export default Catalog;
