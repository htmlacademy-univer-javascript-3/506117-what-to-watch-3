import { render, screen } from '@testing-library/react';
import Footer from './footer';
import { withHistory } from '../../../utils/mock-component';

describe('Component: Footer', () => {
  it('should render correct', () => {
    render(withHistory(<Footer />));
    const expectedText = screen.getByText('© 2019 What to watch Ltd.');
    expect(expectedText).toBeInTheDocument();
  });

  it('should render child component "Logo"', () => {
    render(withHistory(<Footer />));
    const expectedComponent = screen.getByTestId('logo-light');
    expect(expectedComponent).toBeInTheDocument();
  });
});
