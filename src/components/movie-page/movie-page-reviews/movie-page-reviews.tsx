type MoviePageReviewsProps = {
  reviewsInfo: {
    id: number;
    text: string;
    author: string;
    rating: number;
    date: Date;
  }[];
}


function MoviePageReviews({ reviewsInfo }: MoviePageReviewsProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {
          reviewsInfo.map(
            (review) =>
              (
                <div key={review.id} className="review">
                  <blockquote className="review__quote">
                    <p className="review__text">{review.text}</p>

                    <footer className="review__details">
                      <cite className="review__author">{review.author}</cite>
                      <time className="review__date" dateTime={review.date.toISOString()}>
                        {review.date.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', })}
                      </time>
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
