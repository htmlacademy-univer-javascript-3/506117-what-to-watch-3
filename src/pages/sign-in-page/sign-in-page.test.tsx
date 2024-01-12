import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { withHistory, withStore } from '../../utils/mock-component';
import SignInPage from './sign-in-page';
import { makeEmptyUserData } from '../../utils/mocks';


describe('Component: SignInPage', () => {
  it('should render correctly', () => {
    const singinText = 'Sign in';
    const emailAddressText = 'Email address';
    const passwordText = 'Password';
    const { withStoreComponent } = withStore(<SignInPage />, { USER: makeEmptyUserData() });
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    const [headerSignin, buttonSignin] = screen.getAllByText(singinText);

    expect(headerSignin).toBeInTheDocument();
    expect(buttonSignin).toBeInTheDocument();
    expect(screen.getByText(emailAddressText)).toBeInTheDocument();
    expect(screen.getByText(passwordText)).toBeInTheDocument();
  });

  it('should render correctly when user enter login and password', async () => {
    const emailElementTestId = 'emailElement';
    const passwordElementTestId = 'passwordElement';
    const expectedEmailValue = 'keks@gmail.com';
    const expectedPasswordValue = '123456abc';
    const { withStoreComponent } = withStore(<SignInPage />, { USER: makeEmptyUserData() });
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    await userEvent.type(
      screen.getByTestId(emailElementTestId),
      expectedEmailValue,
    );
    await userEvent.type(
      screen.getByTestId(passwordElementTestId),
      expectedPasswordValue,
    );

    expect(screen.getByDisplayValue(expectedEmailValue)).toBeInTheDocument();
    expect(screen.getByDisplayValue(expectedPasswordValue)).toBeInTheDocument();
  });

  it('should render "ErrorBox" on incorrect login or password', () => {
    const expectedErrorText = 'email must be an email';
    const { withStoreComponent } = withStore(<SignInPage />, {
      ERROR: {
        message: 'Validation error: \'/wtw/login\'',
        errorType: 'VALIDATION_ERROR',
        details: [{
          property: 'email',
          value: 'incorrectEmail@incorrect',
          messages: ['email must be an email']
        }]
      },
      USER: makeEmptyUserData()
    });
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByText(expectedErrorText)).toBeInTheDocument();
  });

  it('should render child component "Logo"', () => {
    const { withStoreComponent } = withStore(<SignInPage />, { USER: makeEmptyUserData() });
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    const expectedComponent = screen.getByTestId('logo-light');
    expect(expectedComponent).toBeInTheDocument();
  });
});
