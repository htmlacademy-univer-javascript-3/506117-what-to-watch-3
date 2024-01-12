import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../../utils/mock-component';
import FilmCard from './film-card';
import { makeFakeFilm } from '../../../utils/mocks';
import { MemoryHistory, createMemoryHistory } from 'history';
import { AppRoute } from '../../../const';
import { Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Component: FilmCard', () => {
    let mockHistory: MemoryHistory;

    beforeAll(() => {
        mockHistory = createMemoryHistory();
    });

    beforeEach(() => {
        mockHistory.push(AppRoute.Main);
    });

    it('should render correct', () => {
        const fakeFilm = makeFakeFilm();
        render(withHistory(<FilmCard film={fakeFilm} />));

        expect(screen.getByText(fakeFilm.name)).toBeInTheDocument();
        expect(screen.getByAltText(fakeFilm.name)).toBeInTheDocument();
    });

    it('should trigger redirect to "MoviePage" on card click', async () => {
        const movieText = 'movie';
        const fakeFilm = makeFakeFilm();

        const { withStoreComponent } = withStore(
            withHistory(
                <Routes>
                    <Route path={AppRoute.Film} element={<span>{movieText}</span>} />
                    <Route path={AppRoute.Main} element={<FilmCard film={fakeFilm} />}/>
                </Routes>,
                mockHistory
            ),
            {}
        );
        
        HTMLMediaElement.prototype.load = vi.fn();
        render(withStoreComponent);

        await userEvent.click(
            screen.getByTestId('filmCardLinkTestId')
        );

        expect(screen.getByText(movieText)).toBeInTheDocument();
    });
});