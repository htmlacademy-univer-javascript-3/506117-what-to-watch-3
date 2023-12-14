import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../const';
import { useAppSelector } from '../../../hooks';
import { getAuthorizationStatus } from '../../../store/data/user-data/selectors';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.SignIn} />
  );
}

export default PrivateRoute;
