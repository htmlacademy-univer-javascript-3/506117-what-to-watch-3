import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import PlayerPage from './player-page';
import { makeFakeFilmData } from '../../utils/mocks';

describe('Component: PlayerPage', () => {
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
});