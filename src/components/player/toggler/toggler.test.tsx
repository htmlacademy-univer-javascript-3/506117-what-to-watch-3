import { render, screen } from '@testing-library/react';
import Toggler from './toggler';

describe('Component: Toggler', () => {
    it('should render correct', () => {
        const togglerText = 'Toggler';
        render(<Toggler />);
        expect(screen.getByText(togglerText)).toBeInTheDocument();
    });
});