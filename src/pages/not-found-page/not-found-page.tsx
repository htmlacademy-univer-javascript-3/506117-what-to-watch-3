import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

export default function NotFoundPage() {
  return (
    <div className='error-container'>
      <section className="error-container">
        <span className="four"><span className="screen-reader-text">4</span></span>
        <span className="zero"><span className="screen-reader-text">0</span></span>
        <span className="four"><span className="screen-reader-text">4</span></span>
      </section>
      <div className="link-container">
        <Link to={AppRoute.Main} >Go back to main page.</Link>
      </div>
    </div>
  );
}
