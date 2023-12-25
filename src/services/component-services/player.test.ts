import { describe, expect, it } from 'vitest';
import { secondsToTimeFormat } from './player';

describe('Business logic: player interface info', () => {
  describe('Function: secondsToTimeFormat', () => {
    it('should return "-01:20:00" on "4800"', () => {
      const seconds = 4800;
      const correctResult = '-01:20:00';
      const result = secondsToTimeFormat(seconds);

      expect(result).toBe(correctResult);
    });

    it('should return "-01:00:00" on "3600"', () => {
      const seconds = 3600;
      const correctResult = '-01:00:00';
      const result = secondsToTimeFormat(seconds);

      expect(result).toBe(correctResult);
    });

    it('should return "-30:00" on "1800"', () => {
      const seconds = 1800;
      const correctResult = '-30:00';
      const result = secondsToTimeFormat(seconds);

      expect(result).toBe(correctResult);
    });

    it('should return "-00:10" on "10"', () => {
      const seconds = 10;
      const correctResult = '-00:10';
      const result = secondsToTimeFormat(seconds);

      expect(result).toBe(correctResult);
    });

    it('throw error on negative seconds', () => {
      const seconds = -10;
      expect(() => secondsToTimeFormat(seconds)).toThrowError(
        `Unexpected value: ${seconds}, must be positive`
      );
    });
  });
});
