import { render, screen } from '@testing-library/react';
import RateStar from './rate-star';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeEmptyUserData } from '../../utils/mocks';

describe('Component: RateStar', () => {
  it('should render correct', () => {
    const startLabelText = 'Rating 1';

    const { withStoreComponent } = withStore(<RateStar el={1} setScore={() => undefined} />, {
      USER: makeEmptyUserData()
    });

    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    expect(screen.getByLabelText(startLabelText)).toBeInTheDocument();
  });
});
