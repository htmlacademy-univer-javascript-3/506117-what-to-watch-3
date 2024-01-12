import { render, screen } from '@testing-library/react';
import { withHistory } from '../../../utils/mock-component';
import PlayerTime from './player-time';

describe('Component: PlayerTime', () => {
  it('should render correct', () => {
    render(withHistory(<PlayerTime />));
    const expectedTestId = screen.getByTestId('timeTestId');
    expect(expectedTestId).toBeInTheDocument();
  });
});
