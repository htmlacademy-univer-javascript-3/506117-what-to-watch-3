import { useAppSelector } from "../../../hooks";

export default function SignInErr(): JSX.Element | null {
  const error = useAppSelector((state) => state.userError);
  return ( 
    (error) ? <div className="sign-in__message"><p>{error}</p></div> : null 
  );
}
