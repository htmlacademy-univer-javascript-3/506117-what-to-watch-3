import { makeFakeFilm } from "../../utils/mocks";
import { getGenres } from "./common";

describe('Business logic: common components functions', () => {
    describe('Function: getGenres', () => {
        it('should return all possible genres from films array', () => {
            const films = Array.from({length: 3}).map(() => makeFakeFilm());
            const expectedGenres = ['All genres', 'Horror', 'Comedy'];
            [films[0].genre, films[1].genre, films[2].genre] = ['Horror', 'Comedy', 'Horror'];

            const result = getGenres(films).map((g) => g.title);

            expect(result).toEqual(expectedGenres);
          });
    });
});