import { render, screen } from "@testing-library/react";
import Genres from "./genres";
import { withHistory, withStore } from "../../../utils/mock-component";
import { extractActionsTypes, makeFakeCommonData } from "../../../utils/mocks";
import userEvent from "@testing-library/user-event";
import { changeGenre, putGenreFilms } from "../../../store/data/common-data/common-data";

describe('Component: Genres', () => {
    it('should render correct', () => {
        const catalogText = 'Catalog';

        const { withStoreComponent } = withStore(<Genres />, {
            DATA: makeFakeCommonData()
        });
        const preparedComponent = withHistory(withStoreComponent);

        render(preparedComponent);

        expect(screen.getByText(catalogText)).toBeInTheDocument();
    });

    it('should change current genre on user click', async () => {
        const genreTestId = `genreTestId-1`
        const fakeGenres = [
            {
                id: 0,
                title: 'All genres'
            },
            {
                id: 1,
                title: 'Comedy'
            }
        ]
        const { withStoreComponent, mockStore } = withStore(<Genres />, {
            DATA: {...makeFakeCommonData(),  genre: fakeGenres[0] }
        });
        const preparedComponent = withHistory(withStoreComponent);
        
        render(preparedComponent);

        await userEvent.click(
            screen.getByTestId(genreTestId)
        );

        const actions = extractActionsTypes(mockStore.getActions());

        expect(actions).toEqual([
            changeGenre.type,
            putGenreFilms.type
        ]);
    });
});