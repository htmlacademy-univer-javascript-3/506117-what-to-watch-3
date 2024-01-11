import { render, screen } from '@testing-library/react';
import { makeFakeCommonData, makeFakeFilmData, makeFakeUserData } from '../../utils/mocks';
import { withHistory, withStore } from '../../utils/mock-component';
import MoviePage from './movie-page';

describe('Component: MoviePage', () => {
    it('should render correct', () => {
        const moreLikeThisText = 'More like this';
        const { withStoreComponent } = withStore(<MoviePage />, {
            FILM: makeFakeFilmData(),
            USER: makeFakeUserData(),
            DATA: makeFakeCommonData(),
            ERROR: {
                message: '',
                errorType: '',
                details: []
            }
        });
        const preparedComponent = withHistory(withStoreComponent);
        render(preparedComponent);
        expect(screen.getByText(moreLikeThisText)).toBeInTheDocument();
    });
});