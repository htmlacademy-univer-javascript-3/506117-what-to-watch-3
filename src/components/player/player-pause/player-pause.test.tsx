import { render, screen } from '@testing-library/react';
import PlayerPause from './player-pause';
import { withHistory } from '../../../utils/mock-component';

describe('Component: PlayerPause', () => {
  it('should render correct', () => {
    render(withHistory(<PlayerPause />));
    const expectedText = screen.getByText('Pause');
    expect(expectedText).toBeInTheDocument();
  });
});
