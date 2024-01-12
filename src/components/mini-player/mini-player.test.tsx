import { fireEvent, render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mock-component';
import MiniPlayer from './mini-player';
import { internet } from 'faker';


describe('Component: MiniPlayer', () => {
  beforeAll(() => {
    HTMLMediaElement.prototype.play = vi.fn();
    HTMLMediaElement.prototype.load = vi.fn();
  });

  it('should render correct', () => {
    const miniPlayerTestId = 'miniPlayerTestId';
    const fakePlayerProps = {
      previewVideoLink: internet.url(),
      previewImage: internet.url(),
      isActive: true,
    };
    render(withHistory(<MiniPlayer {...fakePlayerProps} />));

    expect(screen.getByTestId(miniPlayerTestId)).toBeInTheDocument();
  });

  it('should play video when data loaded', () => {
    const fakePlayerProps = {
      previewVideoLink: internet.url(),
      previewImage: internet.url(),
      isActive: true,
    };

    render(<MiniPlayer {...fakePlayerProps} />);
    fireEvent(screen.getByTestId('miniPlayerTestId'), new Event('loadeddata'));

    expect(screen.getByTestId('miniPlayerTestId')).not.toBeDisabled();
  });
});
