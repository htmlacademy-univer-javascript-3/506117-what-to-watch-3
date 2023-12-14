import { PropsWithChildren } from 'react';
import { AuthorizationStatus } from '../../../const';
import { useAppSelector } from '../../../hooks';
import HeadGuest from './head-guest/head-guest';
import HeadUser from './head-user/head-user';
import { getAuthorizationStatus } from '../../../store/data/user-data/selectors';

type HeadProps = PropsWithChildren;

export default function Head({ children }: HeadProps) {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  return (
    (
      authorizationStatus === AuthorizationStatus.Auth ?
        <HeadUser userPageHeader={false}>{children}</HeadUser> :
        <HeadGuest>{children}</HeadGuest>
    )
  );
}
