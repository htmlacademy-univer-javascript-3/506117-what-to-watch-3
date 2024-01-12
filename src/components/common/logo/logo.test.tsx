import { render, screen } from '@testing-library/react';
import Logo from './logo';
import { withHistory, withStore } from '../../../utils/mock-component';
import { Route, Routes } from 'react-router-dom';
import { MemoryHistory, createMemoryHistory } from 'history';
import { AppRoute } from '../../../const';
import userEvent from '@testing-library/user-event';

describe('Component: Logo', () => {
    let mockHistory: MemoryHistory;

    beforeAll(() => {
        mockHistory = createMemoryHistory();
    });

    beforeEach(() => {
        mockHistory.push(AppRoute.Film);
    });
    
    it('should render correct', () => {
        render(withHistory(<Logo isLight={false} />));

        const [letterW1, letterW2] = screen.getAllByText('W');
        const letterT = screen.getByText('T');

        expect(letterW1).toBeInTheDocument();
        expect(letterT).toBeInTheDocument();
        expect(letterW2).toBeInTheDocument();
    });

    it('should render correct light theme', () => {
        render(withHistory(<Logo isLight />));
        const lightLogo = screen.getByTestId('logo-light');
        expect(lightLogo).toBeInTheDocument();
    });

    it('should trigger redirect to "MainPage" on click', async () => {
        const mainPageText = 'main page';

        const { withStoreComponent } = withStore(
            withHistory(
                <Routes>
                    <Route path={AppRoute.Main} element={<span>{mainPageText}</span>} />
                    <Route path={AppRoute.Film} element={<Logo isLight />}/>
                </Routes>,
                mockHistory
            ),
            {}
        );

        render(withStoreComponent);

        await userEvent.click(
            screen.getByTestId('logo-light')
        );

        expect(screen.getByText(mainPageText)).toBeInTheDocument();
    });
});