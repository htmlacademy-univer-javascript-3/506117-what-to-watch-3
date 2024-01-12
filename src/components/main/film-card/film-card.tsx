import { useState } from 'react';
import { Link } from 'react-router-dom';
import MiniPlayer from '../../mini-player/mini-player';
import { Film } from '../../../types/data-types';

type FilmCardProps = {
  film: Film;
}

export default function FilmCard({ film }: FilmCardProps): JSX.Element {
  const [isActive, changeActive] = useState(false);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => changeActive(true)}
      onMouseLeave={() => changeActive(false)}
    >
      <Link
        className="small-film-card__link"
        to={`/films/${film.id}`}
        data-testid='filmCardLinkTestId'
      >
        <div className="small-film-card__image">
          {
            isActive ?
              <MiniPlayer {...{ ...film, isActive }} /> :
              <img src={film.previewImage} alt={film.name} width="280" height="175" />
          }
        </div>
        <h3 className="small-film-card__title">
          {film.name}
        </h3>
      </Link>
    </article>
  );
}
