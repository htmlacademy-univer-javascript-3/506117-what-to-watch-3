
type MoviePageOverviewProps = {
  movieOverview: {
    description: string;
    director: string;
    starring: string[];
  };

  rating: {
    mark: number;
    level: string;
    rateCount: number;
  };
}

export default function MoviePageOverview({ rating, movieOverview }: MoviePageOverviewProps): JSX.Element {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating.mark.toLocaleString()}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{rating.level}</span>
          <span className="film-rating__count">{rating.rateCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        {movieOverview.description}

        <p className="film-card__director"><strong>Director: {movieOverview.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {movieOverview.starring.join(' ')} and other</strong></p>
      </div>
    </>
  );
}
