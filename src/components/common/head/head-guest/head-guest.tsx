import { Link } from 'react-router-dom';
import Logo from '../../logo/logo';
import { AppRoute } from '../../../../const';

function HeadGuest() {
  return (
    <header className="page-header">
      <Logo isLight={false}/>
      <div className="user-block">
        <Link to={AppRoute.SignIn} className="user-block__link">Sign in</Link>
      </div>
    </header>
  );
}

export default HeadGuest;
