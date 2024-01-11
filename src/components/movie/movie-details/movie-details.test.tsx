import { render, screen } from "@testing-library/react";
import { withHistory } from "../../../utils/mock-component";
import { makeFakeFilmDetails } from "../../../utils/mocks";
import MovieDetails from "./movie-details";

describe('Component: MovieDetails', () => {
    it('should render correct without error', () => {
        const directorText = 'Director';
        const starringText = 'Starring';
        const runtimeText = 'Run Time';
        const genreText = 'Genre';
        const releasedText = 'Genre';

        const fakeFilm = makeFakeFilmDetails();
        const preparedComponent = withHistory(<MovieDetails film={fakeFilm}/>);
        render(preparedComponent);

        expect(screen.getByText(directorText)).toBeInTheDocument();
        expect(screen.getByText(starringText)).toBeInTheDocument();
        expect(screen.getByText(runtimeText)).toBeInTheDocument();
        expect(screen.getByText(genreText)).toBeInTheDocument();
        expect(screen.getByText(releasedText)).toBeInTheDocument();

        expect(screen.getByText(fakeFilm.director)).toBeInTheDocument();
        expect(screen.getByText(fakeFilm.genre)).toBeInTheDocument();
        expect(screen.getByText(fakeFilm.released)).toBeInTheDocument();
    });
});