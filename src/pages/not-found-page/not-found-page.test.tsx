import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import NotFoundPage from './not-found-page';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { MemoryHistory, createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';

describe('Component: NotFoundPage', () => {
  let mockHistory: MemoryHistory;

  beforeAll(() => {
    mockHistory = createMemoryHistory();
  });

  beforeEach(() => {
    mockHistory.push('/unknown-endpoint');
  });

  it('should render correct', () => {
    const gobackText = 'Go back to main page.';
    const preparedComponent = withHistory(<NotFoundPage />);
    render(preparedComponent);
    expect(screen.getByText(gobackText)).toBeInTheDocument();
  });

  it('should trigger redirect to "Main" on click', async () => {
    const mainText = 'main';

    const { withStoreComponent } = withStore(
      withHistory(
        <Routes>
          <Route path={AppRoute.Main} element={<span>{mainText}</span>} />
          <Route path={AppRoute.NotFound} element={<NotFoundPage />}/>
        </Routes>,
        mockHistory
      ),
      {}
    );

    render(withStoreComponent);

    await userEvent.click(
      screen.getByTestId('linkTestId')
    );

    expect(screen.getByText(mainText)).toBeInTheDocument();
  });
});
