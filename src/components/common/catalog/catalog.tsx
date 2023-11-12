import FilmCard from '../../main/film-card/film-card';
import Genres from '../genres/genres';

type CatalogProps = {
  films: {
    id: string;
    name: string;
    previewImage: string;
    previewVideoLink: string;
    genre: string;
  }[];
  showGenresFilter: boolean;
}

function Catalog({ films, showGenresFilter }: CatalogProps): JSX.Element {
  return (
    <section className="catalog">
      {showGenresFilter ? <Genres /> : ''}

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
