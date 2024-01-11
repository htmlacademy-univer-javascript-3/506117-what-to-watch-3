import { render, screen } from "@testing-library/react";
import { withHistory, withStore } from "../../../utils/mock-component";
import { makeFakeCommonData } from "../../../utils/mocks";
import ShowMore from "./show-more";
import { SHOW_NUM } from "../../../const";

describe('Component: ShowMore', () => {
    it('should render correct', () => {
        const showMoreText = 'Show more';
        const { withStoreComponent } = withStore(<ShowMore limit={SHOW_NUM} setLimit={() => {}}  />, { DATA: makeFakeCommonData() });
        const preparedComponent = withHistory(withStoreComponent);
        render(preparedComponent);

        expect(screen.getByText(showMoreText)).toBeInTheDocument();
    });
});