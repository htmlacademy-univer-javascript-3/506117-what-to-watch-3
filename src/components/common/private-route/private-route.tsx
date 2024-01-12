import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../const';
import { useAppSelector } from '../../../hooks';
import { getLoadingDataStatus } from '../../../store/data/user-data/selectors';
import LoadingScreen from '../loading/loading';

type PrivateRouteProps = {
  children: JSX.Element;
  authorizationStatus: AuthorizationStatus;
}

function PrivateRoute({ children, authorizationStatus }: PrivateRouteProps): JSX.Element {
  const isLoadingData = useAppSelector(getLoadingDataStatus);

  if (isLoadingData) {
    return <LoadingScreen />;
  }

  return (
    authorizationStatus === AuthorizationStatus.Auth ?
      children :
      <Navigate to={AppRoute.SignIn} />
  );
}

export default PrivateRoute;
