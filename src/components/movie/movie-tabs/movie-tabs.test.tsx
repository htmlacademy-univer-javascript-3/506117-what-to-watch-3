import { render, screen } from "@testing-library/react";
import { withHistory } from "../../../utils/mock-component";
import { makeFakeFilmDetails } from "../../../utils/mocks";
import MovieTabs from "./movie-tabs";

describe('Component: MovieTabs', () => {
    it('should render correct without error', () => {
        const tabsTestId = 'tabsTestId';
        const fakeFilmDetails = makeFakeFilmDetails();
        const preparedComponent = withHistory(<MovieTabs film={fakeFilmDetails} />);
        render(preparedComponent);

        expect(screen.getByTestId(tabsTestId)).toBeInTheDocument();
    });
});