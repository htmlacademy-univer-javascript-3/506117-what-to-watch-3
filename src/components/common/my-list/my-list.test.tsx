import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../../utils/mock-component';
import MyList from './my-list';
import { makeFakeFilm, makeFakeUserData } from '../../../utils/mocks';

describe('Component: MyList', () => {
    it('should render correct', () => {
        const mylistText = 'My list';
        const { withStoreComponent } = withStore(<MyList filmId='0' />, {
            USER: makeFakeUserData(),
        });
        const preparedComponent = withHistory(withStoreComponent);
        render(preparedComponent);

        expect(screen.getByText(mylistText)).toBeInTheDocument();
    });

    it('should render "inList" if film is in list', () => {
        const fakeFilms = [makeFakeFilm()];
        const inListTestId = 'inListTestId';
        const { withStoreComponent } = withStore(<MyList filmId={fakeFilms[0].id} />, {
            USER: {...makeFakeUserData(), favouriteFilms: fakeFilms},
        });
        const preparedComponent = withHistory(withStoreComponent);
        render(preparedComponent);

        expect(screen.getByTestId(inListTestId)).toBeInTheDocument();
    });
});