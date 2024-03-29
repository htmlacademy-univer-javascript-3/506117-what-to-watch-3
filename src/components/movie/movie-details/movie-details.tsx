import { useMemo } from 'react';
import { minutesToStringTime } from '../../../services/component-services/movie';
import { FilmDetails } from '../../../types/data-types';

type MovieDetailsProps = {
  film: FilmDetails;
}

export default function MovieDetails({ film }: MovieDetailsProps): JSX.Element {
  const runTime = useMemo(() => minutesToStringTime(film.runTime), [film.runTime]);

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{film.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {
              film.starring
                .slice(0, film.starring.length - 1)
                .map(
                  (star) => (
                    <span key={`movie-star-${star}`}>
                      {star}, <br />
                    </span>
                  )
                )
            }
            {
              film.starring[film.starring.length - 1]
            }
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{runTime}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{film.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{film.released}</span>
        </p>
      </div>
    </div>
  );
}
