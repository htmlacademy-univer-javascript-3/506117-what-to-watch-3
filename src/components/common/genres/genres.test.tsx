import { render, screen } from "@testing-library/react";
import Genres from "./genres";
import { withHistory, withStore } from "../../../utils/mock-component";
import { makeFakeCommonData } from "../../../utils/mocks";

describe('Component: Genres', () => {
    it('should render correct', () => {
        const catalogText = 'Catalog';

        const { withStoreComponent } = withStore(<Genres />, {
            DATA: makeFakeCommonData()
        });
        const preparedComponent = withHistory(withStoreComponent);

        render(preparedComponent);

        expect(screen.getByText(catalogText)).toBeInTheDocument();
    });
});