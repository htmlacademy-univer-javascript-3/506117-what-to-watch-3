import { render, screen } from "@testing-library/react";
import { withHistory } from "../../../utils/mock-component";
import MovieOverview from "./movie-overview";
import { makeFakeFilmDetails } from "../../../utils/mocks";


describe('Component: MovieOverview', () => {
    it('should render correct without error', () => {
        const fakeFilmDetails = makeFakeFilmDetails();
        const preparedComponent = withHistory(<MovieOverview film={fakeFilmDetails} />);
        render(preparedComponent);

        expect(screen.getByText(`Director: ${fakeFilmDetails.director}`)).toBeInTheDocument();
        expect(screen.getByText(`${fakeFilmDetails.scoresCount} ratings`)).toBeInTheDocument();
        expect(screen.getByText(fakeFilmDetails.rating)).toBeInTheDocument();
    });
});