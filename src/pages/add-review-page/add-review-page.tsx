import { Link, useParams } from 'react-router-dom';
import FieldForm from '../../components/add-review/field-form/field-form';
import Head from '../../components/common/head/head';
import Logo from '../../components/common/logo/logo';
import { useAppSelector } from '../../hooks';
import { getFilmDetails } from '../../store/data/film-data/selectors';


export default function AddReviewPage(): JSX.Element {
  const film = useAppSelector(getFilmDetails);
  const { id } = useParams();

  if (film === null) {
    return <section></section>;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Head>
          <Logo isLight={false} />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${id || ''}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
        </Head>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name} width="218" height="327" />
        </div>
      </div>

      <FieldForm />

    </section>
  );
}

