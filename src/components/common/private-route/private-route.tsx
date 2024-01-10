import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../const';
import { useAppSelector } from '../../../hooks';
import { getAuthorizationStatus, getLoadingDataStatus } from '../../../store/data/user-data/selectors';
import LoadingScreen from '../loading/loading';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
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
