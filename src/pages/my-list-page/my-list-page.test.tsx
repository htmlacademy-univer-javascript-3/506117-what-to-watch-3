import { render, screen } from '@testing-library/react';
import { makeFakeUserData } from '../../utils/mocks';
import { withHistory, withStore } from '../../utils/mock-component';
import MyListPage from './my-list-page';

describe('Component: MyListPage', () => {
    it('should render correct', () => {
        const mylistText = 'My list';
        const { withStoreComponent } = withStore(<MyListPage />, {
            USER: makeFakeUserData(),
        });
        const preparedComponent = withHistory(withStoreComponent);
        render(preparedComponent);
        expect(screen.getByText(mylistText)).toBeInTheDocument();
    });
});