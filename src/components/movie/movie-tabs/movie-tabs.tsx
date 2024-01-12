import { useEffect, useState } from 'react';
import MovieOverview from '../movie-overview/movie-overview';
import MovieDetails from '../movie-details/movie-details';
import MovieReviews from '../movie-reviews/movie-reviews';
import { useParams } from 'react-router-dom';
import { FilmDetails } from '../../../types/data-types';

type MovieTabsProps = {
  film: FilmDetails;
}

export default function MovieTabs({ film }: MovieTabsProps): JSX.Element {
  const tabs = new Map([
    [
      'overview',
      {
        id: 0,
        title: 'Overview',
        component: <MovieOverview film={film} />
      }
    ],
    [
      'details',
      {
        id: 1,
        title: 'Details',
        component: <MovieDetails film={film} />
      }
    ],
    [
      'reviews',
      {
        id: 2,
        title: 'Reviews',
        component: <MovieReviews film={film}/>
      }
    ]
  ]);

  const { tab } = useParams();
  const [currentTabName, setTabName] = useState(tab ?? 'overview');

  useEffect(() => {
    setTabName(() => tab ?? 'overview');
  }, [tab]);

  const handleTabButton = (tabName : string) => setTabName(() => tabName);

  return (
    <div className="film-card__desc" data-testid='tabsTestId'>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {
            Array.from(tabs.entries()).map(([k, t]) => (
              <li className={`film-nav__item${ k === currentTabName ? ' film-nav__item--active' : ''}`} key={t.id}>
                <button onClick={() => handleTabButton(k)} className="film-nav__link" data-testid={`tabTestId-${k}`}>
                  {t.title}
                </button>
              </li>
            ))
          }
        </ul>
      </nav>
      {tabs.get(currentTabName)?.component}
    </div>
  );
}

