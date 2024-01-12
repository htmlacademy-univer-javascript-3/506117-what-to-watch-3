import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { withHistory, withStore } from '../../../utils/mock-component';
import FieldForm from './field-form';
import { extractActionsTypes, makeFakeCommonData, makeFakeFilmData, makeFakeUserData } from '../../../utils/mocks';
import { postReviewAction } from '../../../store/api-actions';
import { redirectToRoute } from '../../../store/action';

describe('Component: FieldForm', () => {
  it('should render correctly', () => {
    const reviewTextId = 'reviewText';
    const ratingStarsId = 'ratingStars';

    const { withStoreComponent } = withStore(<FieldForm />, { USER: makeFakeUserData() });
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByTestId(reviewTextId)).toBeInTheDocument();
    expect(screen.getByTestId(ratingStarsId)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render correctly when user writes review text', async () => {
    const reviewTextId = 'reviewText';
    const expectedReviewText = 'This movie is perfect in all its categories: credits, sound track, production, casting, writing, photography, editing, acting, and direction. I was amazed with the freedom of the use of the camera.';

    const { withStoreComponent } = withStore(<FieldForm />, { USER: makeFakeUserData() });
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    await userEvent.type(
      screen.getByTestId(reviewTextId),
      expectedReviewText,
    );

    expect(screen.getByDisplayValue(expectedReviewText)).toBeInTheDocument();
  });

  it('should dispatch "postReviewAction" when user clicked post button', async () => {
    const { withStoreComponent, mockStore, mockAxiosAdapter } = withStore(<FieldForm />, {
      USER: makeFakeUserData(),
      FILM: makeFakeFilmData(),
      DATA: makeFakeCommonData(),
      ERROR: {
        message: '',
        errorType: '',
        details: []
      }
    });
    const reviewTextId = 'reviewText';
    const reviewText = 'This movie is perfect in all its categories: credits, sound track, production, casting, writing, photography, editing, acting, and direction. I was amazed with the freedom of the use of the camera.';
    mockAxiosAdapter.onPost('/comments/').reply(201, []);

    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);

    await userEvent.type(
      screen.getByTestId(reviewTextId),
      reviewText,
    );

    await userEvent.click(
      screen.getByTestId('star-8')
    );

    await userEvent.click(screen.getByRole('button'));

    const actions = extractActionsTypes(mockStore.getActions());

    expect(actions).toEqual([
      postReviewAction.pending.type,
      postReviewAction.fulfilled.type,
      redirectToRoute('/films//reviews').type
    ]);
  });
});
