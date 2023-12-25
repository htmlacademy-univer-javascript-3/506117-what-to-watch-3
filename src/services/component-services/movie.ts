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
  if (0.0 <= ratingValue && ratingValue <= 2.0) {
    return 'Bad';
  } else if (2.0 <= ratingValue && ratingValue <= 4.0) {
    return 'Normal';
  } else if (4.0 <= ratingValue && ratingValue <= 6.0) {
    return 'Good';
  } else if (6.0 <= ratingValue && ratingValue <= 8.0) {
    return 'Very good';
  } else if (8.0 <= ratingValue && ratingValue <= 10.0) {
    return 'Awesome';
  }
  throw new Error(`Unexpected rating value: ${ratingValue}, rating value must be between 0.0 and 10.0`);
}
