import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mock-component';
import NotFoundPage from './not-found-page';

describe('Component: NotFoundPage', () => {
    it('should render correct', () => {
        const gobackText = 'Go back to main page.';
        const preparedComponent = withHistory(<NotFoundPage />);
        render(preparedComponent);
        expect(screen.getByText(gobackText)).toBeInTheDocument();
    });
});