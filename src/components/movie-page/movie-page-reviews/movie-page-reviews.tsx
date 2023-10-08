import { Reviews } from "../../../constants/reviews";

function MoviePageReviews(): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {
          Reviews.map(
            review =>
              <div className="review">
                <blockquote className="review__quote">
                  <p className="review__text">{review.text}</p>

                  <footer className="review__details">
                    <cite className="review__author">{review.author}</cite>
                    <time className="review__date" dateTime={review.date.toISOString()}>{review.date.toISOString()}</time>
                  </footer>
                </blockquote>

                <div className="review__rating">{review.rating.toLocaleString()}</div>
              </div>
          )
        }
      </div>
    </div>
  );
}

export default MoviePageReviews;
