import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { AppRoute } from '../../../../const';
import { logoutAction } from '../../../../store/api-actions';
import { PropsWithChildren } from 'react';
import { getUserDetails } from '../../../../store/data/user-data/selectors';

type HeadUserProps = {
  userPageHeader: boolean;
}

function HeadUser({ userPageHeader, children }: PropsWithChildren<HeadUserProps>): JSX.Element {
  const userData = useAppSelector(getUserDetails);
  const dispatcher = useAppDispatch();
  const navigate = useNavigate();
  return (
    <header className={`page-header ${userPageHeader ? 'user-page__head' : 'film-card__head'}`}>
      {children}

      {userPageHeader && <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>}

      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <Link to={AppRoute.MyList}>
              <img src={userData?.avatarUrl} alt="User avatar" width="63" height="63" />
            </Link>
          </div>
        </li>
        <li className="user-block__item">
          <button
            onClick={() => {
              dispatcher(logoutAction());
              navigate(AppRoute.Main);
            }}
            className="user-block__link"
          >
            Sign out
          </button>
        </li>
      </ul>
    </header>
  );
}

export default HeadUser;
