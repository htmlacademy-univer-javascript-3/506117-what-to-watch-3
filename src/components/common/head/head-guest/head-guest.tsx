import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../../../const';
import { PropsWithChildren } from 'react';

type HeadGuestProps = PropsWithChildren;

export default function HeadGuest({ children } : HeadGuestProps) {
  const navigate = useNavigate();

  return (
    <header className="page-header">
      {children}
      <div className="user-block">
        <button onClick={() => navigate(AppRoute.SignIn)} className="user-block__link">Sign in</button>
      </div>
    </header>
  );
}
