import { fireEvent, render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import PlayerPage from './player-page';
import { makeFakeFilmData } from '../../utils/mocks';
import userEvent from '@testing-library/user-event';
import { MemoryHistory, createMemoryHistory } from 'history';
import { AppRoute } from '../../const';

describe('Component: PlayerPage', () => {
  let mockHistory: MemoryHistory;

  beforeAll(() => {
    HTMLMediaElement.prototype.play = vi.fn();
    HTMLMediaElement.prototype.pause = vi.fn();
    HTMLMediaElement.prototype.load = vi.fn();
    mockHistory = createMemoryHistory();
  });

  beforeEach(() => {
    mockHistory.push(AppRoute.Main);
    mockHistory.push(AppRoute.Player);
  });

  it('should render correct', () => {
    const fullscreenText = 'Full screen';
    const exitText = 'Exit';
    const { withStoreComponent } = withStore(<PlayerPage />, {
      FILM: makeFakeFilmData(),
      ERROR: {
        message: '',
        errorType: '',
        details: []
      }
    });
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);

    expect(screen.getByText(fullscreenText)).toBeInTheDocument();
    expect(screen.getByText(exitText)).toBeInTheDocument();
  });

  it('should rerender button on user play click correct', async () => {
    const pauseTestId = 'pauseTestId';
    const { withStoreComponent } = withStore(<PlayerPage />, {
      FILM: makeFakeFilmData(),
      ERROR: {
        message: '',
        errorType: '',
        details: []
      }
    });
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);

    await userEvent.click(
      screen.getByTestId('playTestId')
    );

    expect(screen.getByTestId(pauseTestId)).toBeInTheDocument();
  });

  it('should play video when data loaded', () => {
    const { withStoreComponent } = withStore(<PlayerPage />, {
      FILM: makeFakeFilmData(),
      ERROR: {
        message: '',
        errorType: '',
        details: []
      }
    });
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);

    fireEvent(screen.getByTestId('playerVideoTestId'), new Event('loadeddata'));

    expect(screen.getByTestId('playerVideoTestId')).not.toBeDisabled();
  });
});
