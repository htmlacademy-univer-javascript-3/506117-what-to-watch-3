import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../../utils/mock-component';
import MyList from './my-list';
import { makeFakeUserData } from '../../../utils/mocks';

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
});