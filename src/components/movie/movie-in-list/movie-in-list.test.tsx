import { render, screen } from "@testing-library/react";
import { withHistory } from "../../../utils/mock-component";
import MovieInList from "./movie-in-list";

describe('Component: MovieInList', () => {
    it('should render correct without error', () => {
        const mylistText = 'My list';
        const fakeUserInfo = { listCount: 1, isInList: false };
        const preparedComponent = withHistory(<MovieInList userInfo={fakeUserInfo} />);
        render(preparedComponent);

        expect(screen.getByText(mylistText)).toBeInTheDocument();
    });
});