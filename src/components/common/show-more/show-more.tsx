import { SHOW_NUM } from '../../../const';

type ShowMoreProps = {
    limit: number;
    setLimit: React.Dispatch<React.SetStateAction<number>>;
}

export default function ShowMore({ limit, setLimit }: ShowMoreProps): JSX.Element {
  const handleButton = () => setLimit(() => SHOW_NUM + limit);

  return (
    <div className="catalog__more" data-testid='showmoreTestId'>
      <button
        className="catalog__button"
        type="button"
        onClick={handleButton}
      >
                Show more
      </button>
    </div>
  );
}
