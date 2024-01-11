import { render, screen } from '@testing-library/react';
import Logo from './logo';
import { withHistory } from '../../../utils/mock-component';

describe('Component: Logo', () => {
    it('should render correct', () => {
        render(withHistory(<Logo isLight={false} />));

        const [letterW1, letterW2] = screen.getAllByText('W');
        const letterT = screen.getByText('T');

        expect(letterW1).toBeInTheDocument();
        expect(letterT).toBeInTheDocument();
        expect(letterW2).toBeInTheDocument();
    });

    it('should render correct light theme', () => {
        render(withHistory(<Logo isLight />));
        const lightLogo = screen.getByTestId('logo-light');
        expect(lightLogo).toBeInTheDocument();
    });
});