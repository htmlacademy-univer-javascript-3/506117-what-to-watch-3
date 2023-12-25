import { FormEvent, useState } from 'react';
import RateStar from '../../rate-star/rate-star';
import { useAppDispatch } from '../../../hooks';
import { postReviewAction } from '../../../store/api-actions';
import { useParams } from 'react-router-dom';
import { redirectToRoute } from '../../../store/action';
import { AppRoute } from '../../../const';
import ErrorBox from '../../error-box/error-box';

function generateRange(min: number, max: number): number[] {
  const range: number[] = [];

  for (let i = min; i < max + 1; i++) {
    range.push(i);
  }

  return range;
}

export default function FieldForm(): JSX.Element {
  const [text, setFormData] = useState('');
  const [score, setScore] = useState(0);

  const dispatch = useAppDispatch();
  const { id } = useParams();

  if (id === undefined) {
    dispatch(redirectToRoute(AppRoute.Main));
    return <p>Some error occured...</p>;
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (text.length > 0) {
      dispatch(postReviewAction({
        comment: text,
        rating: score,
        id: id
      }));
    }
  };

  const starsRange = generateRange(1, 10);

  return (
    <div className="add-review">
      <form className="add-review__form" onSubmit={handleSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {
              starsRange.reverse().map((el) =>
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
            onChange={(evt) => {
              setFormData(evt.target.value);
            }}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}
