import { MAX_RATING, Rating } from "../../const";

export function minutesToStringTime(minutes: number) {
  if (!Number.isInteger(minutes)) {
    throw new Error(`Unexpected minutes value: ${minutes}, minutes should be integer`);
  }

  if (minutes < 0) {
    throw new Error(`Unexpected minutes value: ${minutes}, minutes should be positive`);
  }

  const hours = Math.floor(minutes / 60);
  const addMinutes = minutes % 60;

  return (
    `${hours > 0 ? `${hours}h` : ''}${addMinutes > 0 ? `${hours > 0 ? ' ' : ''}${addMinutes}m` : ''}`
  );
}

export function computeRatingLevel(ratingValue: number): string {
  if (ratingValue < 0.0 || MAX_RATING < ratingValue )
    throw new Error(`Unexpected rating value: ${ratingValue}, rating value must be between 0.0 and 10.0`);

  if (ratingValue <= Rating.Bad) {
    return 'Bad';
  } else if (ratingValue <= Rating.Normal) {
    return 'Normal';
  } else if (ratingValue <= Rating.Good) {
    return 'Good';
  } else if (ratingValue <= Rating.VeryGood) {
    return 'Very good';
  } else {
    return 'Awesome';
  }
}
