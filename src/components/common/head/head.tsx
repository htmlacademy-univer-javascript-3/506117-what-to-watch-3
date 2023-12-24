import { PropsWithChildren } from 'react';
import { AuthorizationStatus } from '../../../const';
import { useAppSelector } from '../../../hooks';
import HeadGuest from './head-guest/head-guest';
import HeadUser from './head-user/head-user';
import { getAuthorizationStatus } from '../../../store/data/user-data/selectors';

type HeadProps = {
  userPageHeader?: boolean;
}

export default function Head({ children, userPageHeader }: PropsWithChildren<HeadProps>) {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  return (
    (
      authorizationStatus === AuthorizationStatus.Auth ?
        <HeadUser userPageHeader={userPageHeader || false}>{children}</HeadUser> :
        <HeadGuest>{children}</HeadGuest>
    )
  );
}
