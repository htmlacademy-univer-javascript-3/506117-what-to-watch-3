import { render, screen } from '@testing-library/react';
import { withHistory } from '../../../utils/mock-component';
import FilmCard from './film-card';
import { makeFakeFilm } from '../../../utils/mocks';

describe('Component: FilmCard', () => {
    it('should render correct', () => {
        const fakeFilm = makeFakeFilm();
        render(withHistory(<FilmCard film={fakeFilm} />));

        expect(screen.getByText(fakeFilm.name)).toBeInTheDocument();
        expect(screen.getByAltText(fakeFilm.name)).toBeInTheDocument();
    });
});