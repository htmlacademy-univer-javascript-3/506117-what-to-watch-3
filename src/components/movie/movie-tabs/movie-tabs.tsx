import { useEffect, useState } from 'react';
import MovieOverview from '../movie-overview/movie-overview';
import MovieDetails from '../movie-details/movie-details';
import MovieReviews from '../movie-reviews/movie-reviews';
import { FilmDetails } from '../../../types/film-details';
import { Location } from 'react-router-dom';

type MovieTabsProps = {
  film: FilmDetails;
  location: Location;
}

export default function MovieTabs({ film, location }: MovieTabsProps): JSX.Element {
  const tabs = [
    {
      id: 0,
      title: 'Overview',
      component: <MovieOverview film={film} />
    },
    {
      id: 1,
      title: 'Details',
      component: <MovieDetails film={film} />
    },
    {
      id: 2,
      title: 'Reviews',
      component: <MovieReviews film={film}/>
    },
  ];

  const [currentTabId, setTabId] = useState(0);

  useEffect(() => {
    setTabId(() => 0);
  }, [location]);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {
            tabs.map((t) => (
              <li className={`film-nav__item${ t.id === currentTabId ? ' film-nav__item--active' : ''}`} key={t.id}>
                <button onClick={() => setTabId(() => t.id)} className="film-nav__link">
                  {t.title}
                </button>
              </li>
            ))
          }
        </ul>
      </nav>
      {tabs[currentTabId].component}
    </div>
  );
}

