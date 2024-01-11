import { render, screen } from "@testing-library/react";
import HeadGuest from "./head-guest";
import { withHistory } from "../../../../utils/mock-component";

describe('Component: HeadGuest', () => {
    it('should render correct', () => {
        const signinText = 'Sign in'
        render(withHistory(<HeadGuest />));
        expect(screen.getByText(signinText)).toBeInTheDocument();
    });
});