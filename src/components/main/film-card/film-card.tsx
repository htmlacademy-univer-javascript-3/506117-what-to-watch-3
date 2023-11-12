import { useState } from 'react';
import { Link } from 'react-router-dom';

type FilmCardProps = {
  film: {
    id: string;
    name: string;
    previewImage: string;
    previewVideoLink: string;
    genre: string;
  };
  key: string;
}

export default function FilmCard({ film, key }: FilmCardProps): JSX.Element {
  const [, changeActive] = useState(false);

  return (
    <article
      key={key}
      className="small-film-card catalog__films-card"
      onMouseEnter={() => changeActive(true)}
      onMouseLeave={() => changeActive(false)}
    >
      <div className="small-film-card__image">
        <img src={film.previewImage} alt={film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link
          className="small-film-card__link"
          to={`/films/${film.id}/`}
        >
          {film.name}
        </Link>
      </h3>
    </article>
  );
}
