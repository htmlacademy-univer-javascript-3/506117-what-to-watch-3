type MovieOverviewProps = {
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


export default function MovieOverview({ film }: MovieOverviewProps): JSX.Element {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{computeRatingLevel(film.rating)}</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        {film.description}
        <p className="film-card__director"><strong>Director: {film.director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {film.starring.join(' ')} and other</strong></p>
      </div>
    </>
  );
}

function computeRatingLevel(ratingValue: number): string {
  if (0.0 <= ratingValue && ratingValue <= 2.0) {
    return 'Bad';
  } else if (2.0 <= ratingValue && ratingValue <= 4.0) {
    return 'Normal';
  } else if (4.0 <= ratingValue && ratingValue <= 6.0) {
    return 'Good';
  } else if (6.0 <= ratingValue && ratingValue <= 8.0) {
    return 'Very good';
  } else if (8.0 <= ratingValue && ratingValue <= 10.0) {
    return 'Awesome';
  }
  throw new Error(`Unexpected rating value: ${ratingValue}, rating value must be between 0.0 and 10.0`);
}
