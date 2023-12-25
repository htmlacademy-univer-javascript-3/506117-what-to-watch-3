import { useAppSelector } from '../../hooks';
import { getErrorData } from '../../store/data/error-data/selectors';

export default function ErrorBox(): JSX.Element | null {
  const error = useAppSelector(getErrorData);
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
