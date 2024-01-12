import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { fetchFavouriteFilmsAction, postFavouriteAction } from '../../../store/api-actions';
import { getFavouritePostingStatus, getFavourites } from '../../../store/data/user-data/selectors';

type MyListProps = {
  filmId: string;
}

export default function MyList({ filmId }: MyListProps): JSX.Element {
  const [clicked, setClicked] = useState(false);
  const films = useAppSelector(getFavourites);
  const isPostingFavourite = useAppSelector(getFavouritePostingStatus);
  const isInList = films.map((f) => f.id).includes(filmId);
  const dispatcher = useAppDispatch();

  useEffect(() => {
    dispatcher(fetchFavouriteFilmsAction());
  }, [dispatcher, clicked]);

  const handleClick = () => {
    if (filmId !== undefined && !isPostingFavourite) {
      dispatcher(postFavouriteAction({
        id: filmId,
        status: isInList ? 0 : 1
      })).then(() => {
        setClicked(() => !clicked);
      });
    }
  };

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={handleClick}>
      {
        isInList ?
          <svg viewBox="0 0 19 20" width="19" height="20" data-testid='inListTestId'>
            <use xlinkHref="#in-list"></use>
          </svg> :
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
      }

      <span>My list</span>
      <span className="film-card__count">{films.length}</span>
    </button>
  );
}
