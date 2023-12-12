type RateStarProps = {
    el: number;
    setScore: React.Dispatch<React.SetStateAction<number>>;
}

export default function RateStar({el, setScore} : RateStarProps): JSX.Element {
  return (
    <>
      <input
        className="rating__input"
        id={`star-${el}`}
        type="radio"
        name="rating"
        value={el}
        onChange={() => setScore(() => el)}
      />
      <label className="rating__label" htmlFor={`star-${el}`}>Rating {el}</label>
    </>
  );
}
