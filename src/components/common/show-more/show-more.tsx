import { showNum } from "../../../const";

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
                onClick={() => setLimit(() => showNum + limit)}
            >
                Show more
            </button>
        </div>
    );
}