import { FormEvent, useState } from 'react';
import RateStar from '../../rate-star/rate-star';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { postReviewAction } from '../../../store/api-actions';
import { useParams } from 'react-router-dom';
import { redirectToRoute } from '../../../store/action';
import { MAX_RATING, MAX_TEXT_LENGTH, MIN_TEXT_LENGTH } from '../../../const';
import ErrorBox from '../../error-box/error-box';
import { getReviewPostingStatus } from '../../../store/data/user-data/selectors';


export default function FieldForm(): JSX.Element {
  const [text, setFormData] = useState('');
  const [score, setScore] = useState(0);

  const dispatch = useAppDispatch();
  const { id } = useParams();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(postReviewAction({
      comment: text,
      rating: score,
      id: id ?? ''
    })).then((response) => {
      if (response.meta.requestStatus === 'fulfilled') {
        dispatch(redirectToRoute(`/films/${id ?? ''}/reviews`));
      }
    });
  };

  const isPosting = useAppSelector(getReviewPostingStatus);
  const starsScore = Array.from({ length: MAX_RATING }, (_v, k) => k + 1);

  return (
    <div className="add-review">
      <form className="add-review__form" onSubmit={handleSubmit}>
        <div className="rating">
          <div className="rating__stars" data-testid='ratingStars'>
            {
              starsScore.reverse().map((el) =>
                <RateStar el={el} setScore={setScore} key={`score-${el}`} />
              )
            }
          </div>
        </div>

        <ErrorBox />

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            data-testid="reviewText"
            disabled={isPosting}
            minLength={MIN_TEXT_LENGTH}
            maxLength={MAX_TEXT_LENGTH}
            required
            onChange={(evt) => {
              setFormData(evt.target.value);
            }}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={isPosting}>Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}
