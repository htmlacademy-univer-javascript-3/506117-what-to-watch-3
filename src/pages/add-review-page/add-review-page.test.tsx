import { render, screen } from '@testing-library/react';
import AddReviewPage from './add-review-page';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeFilmData, makeFakeFilmDetails, makeFakeUserData } from '../../utils/mocks';

describe('Component: AddReviewPage', () => {
    it('should render correct', () => {
        const addreviewText = 'Add review';
        const fakeFilmDetails = makeFakeFilmDetails();
        const { withStoreComponent } = withStore(<AddReviewPage />, {
            FILM: {...makeFakeFilmData(), filmDetails: fakeFilmDetails},
            USER: makeFakeUserData()
        });
        const preparedComponent = withHistory(withStoreComponent);
        render(preparedComponent);
        expect(screen.getByText(addreviewText)).toBeInTheDocument();
        expect(screen.getAllByAltText(fakeFilmDetails.name)[0]).toBeInTheDocument();
    });
});