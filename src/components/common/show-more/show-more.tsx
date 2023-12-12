import { SHOW_NUM } from '../../../const';

type ShowMoreProps = {
    limit: number;
    setLimit: React.Dispatch<React.SetStateAction<number>>;
}

export default function ShowMore({ limit, setLimit }: ShowMoreProps): JSX.Element {
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => setLimit(() => SHOW_NUM + limit)}
      >
                Show more
      </button>
    </div>
  );
}
