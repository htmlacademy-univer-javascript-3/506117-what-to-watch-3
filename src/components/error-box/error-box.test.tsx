import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import ErrorBox from './error-box';

describe('Component: ErrorBox', () => {
  it('should render correct without error', () => {
    const errorBoxTestId = 'errorBoxId';
    const { withStoreComponent } = withStore(<ErrorBox />, {});
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);

    expect(screen.getByTestId(errorBoxTestId)).toBeInTheDocument();
  });

  it('should render correct with error', () => {
    const errorText = 'email must be an email';
    const { withStoreComponent } = withStore(<ErrorBox />, {
      ERROR: {
        message: 'Validation error: \'/wtw/login\'',
        errorType: 'VALIDATION_ERROR',
        details: [{
          property: 'email',
          value: 'incorrectEmail@incorrect',
          messages: ['email must be an email']
        }]
      },
    });
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);

    expect(screen.getByText(errorText)).toBeInTheDocument();
  });
});
