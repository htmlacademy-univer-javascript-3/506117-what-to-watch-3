import { useAppSelector } from '../../../hooks';

export default function SignInErr(): JSX.Element | null {
  const error = useAppSelector((state) => state.userError);
  if (error === null) {
    return null;
  }

  return (
    <div className="sign-in__message">
      {
        error.details.map((detail) =>
          detail.messages.map((message) =>
            <p key={`message-${message}`}>{message}</p>
          )
        )
      }
    </div>
  );
}
