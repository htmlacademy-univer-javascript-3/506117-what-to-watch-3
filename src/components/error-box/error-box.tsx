import { useAppSelector } from '../../hooks';
import { getErrorData } from '../../store/data/error-data/selectors';

export default function ErrorBox(): JSX.Element {
  const error = useAppSelector(getErrorData);
  return (
    <div className="sign-in__message" data-testid='errorBoxId'>
      {
        error?.details.map((detail) =>
          detail.messages.map((message) =>
            <p key={`message-${message}`}>{message}</p>
          )
        )
      }
    </div>
  );
}
