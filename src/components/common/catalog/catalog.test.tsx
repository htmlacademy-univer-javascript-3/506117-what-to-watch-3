import { render, screen } from "@testing-library/react";

import { withHistory, withStore } from "../../../utils/mock-component";
import { makeFakeCommonData } from "../../../utils/mocks";
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
});