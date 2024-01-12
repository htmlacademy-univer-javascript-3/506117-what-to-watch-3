import { render, screen } from "@testing-library/react";

import { withHistory, withStore } from "../../../utils/mock-component";
import { makeFakeCommonData, makeFakeFilm } from "../../../utils/mocks";
import Catalog from "./catalog";

describe('Component: Catalog', () => {
    it('should render correct', () => {
        const catalogTestId = 'catalogId';

        const { withStoreComponent } = withStore(<Catalog />, {
            DATA: makeFakeCommonData()
        });
        const preparedComponent = withHistory(withStoreComponent);

        render(preparedComponent);

        expect(screen.getByTestId(catalogTestId)).toBeInTheDocument();
    });

    it('should render "ShowMore" component on more than 8 films', () => {
        const showmoreTestId = 'showmoreTestId';
        const fakeFilms = Array.from({ length: 10 }).map(() => makeFakeFilm());

        const { withStoreComponent } = withStore(<Catalog />, {
            DATA: {
                ...makeFakeCommonData(),
                genreFilms: fakeFilms,
                genre: {
                    id: 0,
                    title: 'All genres'
                }
            }
        });
        const preparedComponent = withHistory(withStoreComponent);

        render(preparedComponent);

        expect(screen.getByTestId(showmoreTestId)).toBeInTheDocument();
    });

    it('should render children components', () => {
        const childText = 'child text';
        const childWithText = <span>{childText}</span>
        const fakeFilms = Array.from({ length: 10 }).map(() => makeFakeFilm());

        const { withStoreComponent } = withStore(<Catalog>{childWithText}</Catalog>, {
            DATA: {
                ...makeFakeCommonData(),
                genreFilms: fakeFilms,
                genre: {
                    id: 0,
                    title: 'All genres'
                }
            }
        });
        const preparedComponent = withHistory(withStoreComponent);

        render(preparedComponent);

        expect(screen.getByText(childText)).toBeInTheDocument();
    });

    it('should render "FilmCard" components', () => {
        const fakeFilms = [makeFakeFilm()];

        const { withStoreComponent } = withStore(<Catalog />, {
            DATA: {
                ...makeFakeCommonData(),
                genreFilms: fakeFilms,
                genre: {
                    id: 0,
                    title: 'All genres'
                }
            }
        });
        const preparedComponent = withHistory(withStoreComponent);

        render(preparedComponent);

        expect(screen.getByText(fakeFilms[0].name)).toBeInTheDocument();
    });
});