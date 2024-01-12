import { render, screen } from "@testing-library/react";
import { withHistory, withStore } from "../../../utils/mock-component";
import { makeEmptyUserData, makeFakeUserData } from "../../../utils/mocks";
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

    it('should render head guest on no-auth status', () => {
        const guestHeadTestId = 'guestHeadTestId';
        const { withStoreComponent } = withStore(<Head userPageHeader />, {
            USER: makeEmptyUserData(),
        });
        const preparedComponent = withHistory(withStoreComponent);
        render(preparedComponent);

        expect(screen.getByTestId(guestHeadTestId)).toBeInTheDocument();
    });
});