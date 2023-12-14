import { FormEvent, useRef } from 'react';
import Footer from '../../components/common/footer/footer';
import Logo from '../../components/common/logo/logo';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { getError } from '../../store/data/error-data/selectors';
import SignInErr from '../../components/sign-in/sign-in-err/sign-in-err';

export default function SignInPage(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value
      }));
    }
  };

  const signInError = useAppSelector(getError);
  const hasEmailError = signInError?.details.map((d) => d.property).includes('email');
  const hasPasswordError = signInError?.details.map((d) => d.property).includes('password');

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo isLight={false} />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <SignInErr />
      <div className="sign-in user-page__content">
        <form action="" onSubmit={handleSubmit} className="sign-in__form">
          <div className="sign-in__fields">
            <div className={`${hasEmailError ? 'sign-in__field--error ' : '' }sign-in__field`}>
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                ref={loginRef}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className={`${hasPasswordError ? 'sign-in__field--error ' : '' }sign-in__field`}>
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                ref={passwordRef}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}
