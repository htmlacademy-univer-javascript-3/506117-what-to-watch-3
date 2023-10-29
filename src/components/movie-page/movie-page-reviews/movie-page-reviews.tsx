type MoviePageReviewsProps = {
  reviews: {
    id: string;
    date: string;
    user: string;
    comment: string;
    rating: number;
  }[];
}


function MoviePageReviews({ reviews }: MoviePageReviewsProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {
          reviews.map(
            (review) =>
              (
                <div key={review.id} className="review">
                  <blockquote className="review__quote">
                    <p className="review__text">{review.comment}</p>

                    <footer className="review__details">
                      <cite className="review__author">{review.user}</cite>
                      <time className="review__date" dateTime={review.date}>{review.date}</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">{review.rating.toLocaleString()}</div>
                </div>
              )
          )
        }
      </div>
    </div>
  );
}

export default MoviePageReviews;
