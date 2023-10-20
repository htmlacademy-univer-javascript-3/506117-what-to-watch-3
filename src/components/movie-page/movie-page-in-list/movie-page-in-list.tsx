type MoviePageInListProps = {
  userInfo: {
    listCount: number;
    isInList: boolean;
  };
}

function MoviePageInList({ userInfo }: MoviePageInListProps): JSX.Element {
  return (
    <button className="btn btn--list film-card__button" type="button">
      {
        userInfo.isInList ?
          <svg viewBox="0 0 18 14" width="18" height="14">
            <use xlinkHref="#in-list" href="#in-list"></use>
          </svg> :
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add" href="#add"></use>
          </svg>
      }
      <span>My list</span>
      <span className="film-card__count">{userInfo.listCount}</span>
    </button>
  );
}

export default MoviePageInList;
