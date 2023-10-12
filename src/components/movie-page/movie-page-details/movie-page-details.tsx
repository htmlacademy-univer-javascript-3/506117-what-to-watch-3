type MoviePageDetailsProps = {
  filmInfo: {
    director: string;
    stars: string[];
    runTime: string;
    genre: string;
    releaseDate: Date;
  };
}


function MoviePageDetails({ filmInfo }: MoviePageDetailsProps): JSX.Element {
  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{filmInfo.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {
              `
                ${filmInfo.stars.slice(0, -1).join(', <br />')} 
                ${filmInfo.stars[filmInfo.stars.length - 1]}`
            }
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{filmInfo.runTime}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{filmInfo.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{filmInfo.releaseDate.toISOString()}</span>
        </p>
      </div>
    </div>
  );
}

export default MoviePageDetails;
