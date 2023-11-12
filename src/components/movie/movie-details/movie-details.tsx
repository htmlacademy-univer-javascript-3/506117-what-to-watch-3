
type MovieDetailsProps = {
  film: {
    id: string;
    name: string;
    posterImage: string;
    backgroundImage: string;
    backgroundColor: string;
    videoLink: string;
    description: string;
    rating: number;
    scoresCount: number;
    director: string;
    starring: string[];
    runTime: number;
    genre: string;
    released: number;
    isFavorite: boolean;
  };
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

function minutesToStringTime(minutes: number) {
  let hours = Math.floor(minutes / 60);
  let addMinutes = minutes % 60;

  return (
    `${hours > 0 ? `${hours}h` : ''}${addMinutes > 0 ? ` ${addMinutes}m` : ''}`
  );
}
