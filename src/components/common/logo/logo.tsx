import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';

type LogoProps = {
  isLight: boolean;
}

export default function Logo({ isLight }: LogoProps): JSX.Element {
  return (
    <div className="logo">
      <Link
        to={AppRoute.Main}
        className={`logo__link ${ isLight ? 'logo__link--light' : ''}`}
        data-testid={`logo${isLight ? '-light' : ''}`}
      >
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}
