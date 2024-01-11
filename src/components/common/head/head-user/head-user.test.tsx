import { render, screen } from "@testing-library/react";
import { withHistory, withStore } from "../../../../utils/mock-component";
import { makeFakeUserData } from "../../../../utils/mocks";
import HeadUser from "./head-user";

describe('Component: HeadUser', () => {
    it('should render correct', () => {
        const signoutText = 'Sign out'
        const avatarAltText = 'User avatar';
        const { withStoreComponent } = withStore(<HeadUser userPageHeader />, {
            USER: makeFakeUserData()
        });
        const preparedComponent = withHistory(withStoreComponent);
        render(preparedComponent);

        expect(screen.getByText(signoutText)).toBeInTheDocument();
        expect(screen.getByAltText(avatarAltText)).toBeInTheDocument();
    });
});