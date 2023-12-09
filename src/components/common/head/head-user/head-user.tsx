import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import Logo from '../../logo/logo';
import { AppRoute } from '../../../../const';
import { logOut } from '../../../../store/action';

type HeadUserProps = {
  userPageHeader: boolean;
}

function HeadUser({ userPageHeader }: HeadUserProps): JSX.Element {
  const userData = useAppSelector((state) => state.userData);
  const dispatcher = useAppDispatch();
  return (
    <header className={`page-header ${userPageHeader ? 'user-page__head' : 'film-card__head'}`}>
      <Logo isLight={false} />

      {userPageHeader && <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>}

      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src={userData?.avatarUrl} alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          <Link 
            onClick={() => dispatcher(logOut())}
            className="user-block__link" 
            to={AppRoute.Main}>
              Sign out
            </Link>
        </li>
      </ul>
    </header>
  );
}

export default HeadUser;
