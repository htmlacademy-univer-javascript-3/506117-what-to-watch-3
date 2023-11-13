import { useState } from 'react';
import RatingStars from '../rating-stars/rating-stars';

export default function FieldForm(): JSX.Element {
  const [, setFormData] = useState('');

  return (
    <div className="add-review">
      <form className="add-review__form">
        <div className="rating">
          <RatingStars />
        </div>

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
