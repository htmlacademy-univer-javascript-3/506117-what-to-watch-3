import { render, screen } from "@testing-library/react";
import { withHistory, withStore } from "../../../utils/mock-component";
import { makeFakeUserData } from "../../../utils/mocks";
import Favourites from "./favourites";

describe('Component: Favourites', () => {
    it('should render correct without error', () => {
        const favouritesTestId = 'favouritesTestId';
        const { withStoreComponent } = withStore(<Favourites />, {
            USER: makeFakeUserData()
        });
        const preparedComponent = withHistory(withStoreComponent);
        render(preparedComponent);

        expect(screen.getByTestId(favouritesTestId)).toBeInTheDocument();
    });
});