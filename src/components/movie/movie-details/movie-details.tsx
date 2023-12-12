import { FilmDetails } from "../../../types/film-details";

type MovieDetailsProps = {
  film: FilmDetails
}

function minutesToStringTime(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const addMinutes = minutes % 60;

  return (
    `${hours > 0 ? `${hours}h` : ''}${addMinutes > 0 ? ` ${addMinutes}m` : ''}`
  );
}

export default function MovieDetails({ film }: MovieDetailsProps): JSX.Element {
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
                    <>
                      {star}, <br />
                    </>
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
          <span className="film-card__details-value">
            {minutesToStringTime(film.runTime)}
          </span>
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
