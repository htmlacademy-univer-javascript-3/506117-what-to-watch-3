import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { fetchReviewsAction } from '../../../store/api-actions';
import { getReviews } from '../../../store/data/film-data/selectors';
import { FilmDetails } from '../../../types/data-types';

type MovieReviewsProps = {
  film: FilmDetails;
}

export default function MovieReviews({ film }: MovieReviewsProps): JSX.Element {
  const dispatcher = useAppDispatch();

  useEffect(() => {
    dispatcher(fetchReviewsAction({ id: film.id }));
  }, [dispatcher, film]);

  const reviews = useAppSelector(getReviews);

  return (
    <div className="film-card__reviews film-card__row" data-testid='reviewsTestId'>
      <div className="film-card__reviews-col">
        {
          reviews.length === 0 && <p className="review__text">There is no comments yet...</p>
        }
        {
          reviews.map(
            (review) =>
              (
                <div key={review.id} className="review">
                  <blockquote className="review__quote">
                    <p className="review__text">{review.comment}</p>

                    <footer className="review__details">
                      <cite className="review__author">{review.user}</cite>
                      <time className="review__date" dateTime={review.date}>
                        {(new Date(review.date)).toDateString()}
                      </time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">{review.rating}</div>
                </div>
              )
          )
        }
      </div>
    </div>
  );
}
