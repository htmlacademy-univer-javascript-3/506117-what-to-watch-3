import { render, screen } from "@testing-library/react";
import { withHistory, withStore } from "../../../utils/mock-component";
import { makeFakeUserData } from "../../../utils/mocks";
import Head from "./head";

describe('Component: Head', () => {
    it('should render correct head', () => {
        const avatarAltText = 'User avatar';
        const { withStoreComponent } = withStore(<Head userPageHeader />, {
            USER: makeFakeUserData(),
        });
        const preparedComponent = withHistory(withStoreComponent);
        render(preparedComponent);

        expect(screen.getByAltText(avatarAltText)).toBeInTheDocument();
    });
});