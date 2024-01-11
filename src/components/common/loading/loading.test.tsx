import { render, screen } from '@testing-library/react';
import LoadingScreen from './loading';

describe('Component: Logo', () => {
    it('should render correct', () => {
        render(<LoadingScreen />);
        const renderedHourglass = screen.getByTestId('hourglass');
        expect(renderedHourglass).toBeInTheDocument();
    });
});