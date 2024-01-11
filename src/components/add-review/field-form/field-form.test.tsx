import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { withHistory, withStore } from '../../../utils/mock-component';
import FieldForm from './field-form';

describe('Component: FieldForm', () => {
    it('should render correctly', () => {
        const reviewTextId = 'reviewText';
        const ratingStarsId = 'ratingStars';

        const { withStoreComponent } = withStore(<FieldForm />, {});
        const preparedComponent = withHistory(withStoreComponent);

        render(preparedComponent);

        expect(screen.getByTestId(reviewTextId)).toBeInTheDocument();
        expect(screen.getByTestId(ratingStarsId)).toBeInTheDocument();
    });

    it('should render correctly when user writes review text', async () => {
        const reviewTextId = 'reviewText';
        const expectedReviewText = 'This movie is perfect in all its categories: credits, sound track, production, casting, writing, photography, editing, acting, and direction. I was amazed with the freedom of the use of the camera.';

        const { withStoreComponent } = withStore(<FieldForm />, {});
        const preparedComponent = withHistory(withStoreComponent);

        render(preparedComponent);
        await userEvent.type(
            screen.getByTestId(reviewTextId),
            expectedReviewText,
        );

        expect(screen.getByDisplayValue(expectedReviewText)).toBeInTheDocument();
    });
});