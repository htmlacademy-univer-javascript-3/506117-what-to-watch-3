import { PropsWithChildren } from "react";
import { AuthorizationStatus } from "../../../const";
import { useAppSelector } from "../../../hooks";
import HeadGuest from "./head-guest/head-guest";
import HeadUser from "./head-user/head-user";

type HeadProps = PropsWithChildren;

export default function Head({ children }: HeadProps) {
    const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
    return (
        <>
            {
                authorizationStatus === AuthorizationStatus.Auth ?
                    <HeadUser userPageHeader={false}>{children}</HeadUser> :
                    <HeadGuest>{children}</HeadGuest>
            }
        </>
    );
}