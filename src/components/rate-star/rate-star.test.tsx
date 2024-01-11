import { render, screen } from '@testing-library/react';
import RateStar from './rate-star';

describe('Component: RateStar', () => {
    it('should render correct', () => {
        const startLabelText = 'Rating 1';
        render(<RateStar el={1} setScore={() => {}} />);
        expect(screen.getByLabelText(startLabelText)).toBeInTheDocument();
    });
});