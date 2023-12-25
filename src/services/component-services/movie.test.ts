import { describe, expect, it } from 'vitest';
import { computeRatingLevel, minutesToStringTime } from './movie';

describe('Business logic: prettify film info', () => {
  describe('Function: minutesToStringTime', () => {
    it('should return "1h 20m" when minutes are "80"', () => {
      const minutes = 80;
      const correctAnswer = '1h 20m';
      const result = minutesToStringTime(minutes);

      expect(result).toBe(correctAnswer);
    });

    it('should return "1h" when minutes are "60"', () => {
      const minutes = 60;
      const correctAnswer = '1h';
      const result = minutesToStringTime(minutes);

      expect(result).toBe(correctAnswer);
    });

    it('should return "25m" when minutes are "25"', () => {
      const minutes = 25;
      const correctAnswer = '25m';
      const result = minutesToStringTime(minutes);

      expect(result).toBe(correctAnswer);
    });

    it('should throw exception on uninteger minutes', () => {
      const unintegerMinutes = 35.3333333;

      expect(() => minutesToStringTime(unintegerMinutes)).toThrowError(
        `Unexpected minutes value: ${unintegerMinutes}, minutes should be integer`
      );
    });

    it('should throw exception on negative minutes', () => {
      const negativeMinutes = -29;

      expect(() => minutesToStringTime(negativeMinutes)).toThrowError(
        `Unexpected minutes value: ${negativeMinutes}, minutes should be positive`
      );
    });
  });

  describe('Function: computeRatingLevel', () => {
    it('should return "Good" on ratingValue 5.5', () => {
      const ratingValue = 5.5;
      const correctResult = 'Good';
      const result = computeRatingLevel(ratingValue);

      expect(result).toBe(correctResult);
    });

    it('should return "Bad" on ratingValue 1', () => {
      const ratingValue = 1;
      const correctResult = 'Bad';
      const result = computeRatingLevel(ratingValue);

      expect(result).toBe(correctResult);
    });

    it('should return "Awesome" on ratingValue 10', () => {
      const ratingValue = 10;
      const correctResult = 'Awesome';
      const result = computeRatingLevel(ratingValue);

      expect(result).toBe(correctResult);
    });

    it('should throw Error on values out of range [0.0; 10.0]', () => {
      const incorrectRatingValue = -10;
      expect(() => computeRatingLevel(incorrectRatingValue)).toThrowError(
        `Unexpected rating value: ${incorrectRatingValue}, rating value must be between 0.0 and 10.0`
      );
    });
  });
});
