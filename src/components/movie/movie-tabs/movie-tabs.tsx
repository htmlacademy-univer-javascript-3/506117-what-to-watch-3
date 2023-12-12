import { useState } from "react";
import { Tab } from "../../../const";
import MovieOverview from "../movie-overview/movie-overview";
import MovieDetails from "../movie-details/movie-details";
import MovieReviews from "../movie-reviews/movie-reviews";
import { FilmDetails } from "../../../types/film-details";

type MovieTabsProps = {
  film: FilmDetails
}

export default function MovieTabs({ film }: MovieTabsProps): JSX.Element {
  const tabs = [
    {
      id: 0,
      title: 'Overview',
      component: <MovieOverview />
    },
    {
      id: 1,
      title: 'Details',
      component: <MovieDetails />
    },
    {
      id: 2,
      title: 'Reviews',
      component: <MovieReviews />
    },
  ]
  const [currentTab, setTab] = useState(Tab.Overview);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {
            [Tab.Overview, Tab.Details, Tab.Reviews].map(t => {
              return (
                <li className="film-nav__item">
                  <button onClick={() => setTab(() => Tab.Overview)} className="film-nav__link">
                    Overview
                  </button>
                </li>
              )
            })
          }
          <li className="film-nav__item">
            <button onClick={() => setTab(() => Tab.Overview)} className="film-nav__link">
              Overview
            </button>
          </li>
          <li className="film-nav__item">
            <button onClick={() => setTab(() => Tab.Details)} className="film-nav__link">
              Details
            </button>
          </li>
          <li className={"film-nav__item"}>
            <button onClick={() => setTab(() => Tab.Reviews)} className="film-nav__link">
              Reviews
            </button>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}