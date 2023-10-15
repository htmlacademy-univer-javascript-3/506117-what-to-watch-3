function GenerateRange(min: number, max: number): number[] {
	let range: number[] = [];

	for (let i = min; i < max + 1; i++)
		range.push(i);

	return range;
}

export default function RatingStars(): JSX.Element {
	return (
		<div className="rating__stars">
			{
				GenerateRange(1, 10).map(el =>
					<>
						<input className="rating__input" id={`star-${el}`} type="radio" name="rating" value={el} />
						<label className="rating__label" htmlFor={`star-${el}`}>Rating {el}</label>
					</>
				)
			}
		</div>
	);
}
