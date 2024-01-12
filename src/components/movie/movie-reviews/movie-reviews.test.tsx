import { render, screen } from "@testing-library/react";
import { withHistory, withStore } from "../../../utils/mock-component";
import MovieReviews from "./movie-reviews";
import { makeFakeFilmData, makeFakeFilmDetails } from "../../../utils/mocks";

describe('Component: MovieReviews', () => {
    it('should render correct without error', () => {
        const reviewsTestId = 'reviewsTestId';
        const fakeFilm = makeFakeFilmDetails();
        const { withStoreComponent } = withStore(<MovieReviews film={fakeFilm} />, {
            FILM: makeFakeFilmData(),
        });
        const preparedComponent = withHistory(withStoreComponent);
        render(preparedComponent);

        expect(screen.getByTestId(reviewsTestId)).toBeInTheDocument();
    });

    it('should render correct without any reviews', () => {
        const noReviewsText= 'There is no comments yet...';
        const fakeFilm = makeFakeFilmDetails();
        const { withStoreComponent } = withStore(<MovieReviews film={fakeFilm} />, {
            FILM: {...makeFakeFilmData(), reviews: []}
        });
        const preparedComponent = withHistory(withStoreComponent);
        render(preparedComponent);

        expect(screen.getByText(noReviewsText)).toBeInTheDocument();
    });
});