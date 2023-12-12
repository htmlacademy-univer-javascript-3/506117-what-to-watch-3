import { useAppSelector } from "../../../hooks";

export default function SignInErr(): JSX.Element | null {
  const error = useAppSelector((state) => state.userError);
  if (error === null) return <></>;

  return (
    <div className="sign-in__message">
      {
        error.details.map(d => d.messages.map(message => <p>{message}</p>))
      }
    </div>
  );
}
