import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../../utils/mock-component';
import PromoCard from './promo-card';
import { makeEmptyUserData, makeFakeCommonData, makeFakePromo, makeFakeUserData } from '../../../utils/mocks';

describe('Component: PromoCard', () => {
  it('should render correct without error', () => {
    const playText = 'Play';
    const fakePromo = makeFakePromo();
    const { withStoreComponent } = withStore(<PromoCard />, {
      DATA: {...makeFakeCommonData(), promo: fakePromo },
      USER: makeEmptyUserData()
    });
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);

    expect(screen.getByText(playText)).toBeInTheDocument();
    expect(screen.getByText(fakePromo.name)).toBeInTheDocument();
    expect(screen.getByText(fakePromo.genre)).toBeInTheDocument();
    expect(screen.getByText(fakePromo.released)).toBeInTheDocument();
    expect(screen.getByAltText(fakePromo.name)).toBeInTheDocument();
    expect(screen.getByAltText(`${fakePromo.name} poster`)).toBeInTheDocument();
  });

  it('should render "MyList" if user is authorized', () => {
    const myListText = 'My list';
    const { withStoreComponent } = withStore(<PromoCard />, {
      DATA: makeFakeCommonData(),
      USER: makeFakeUserData()
    });
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);

    expect(screen.getByText(myListText)).toBeInTheDocument();
  });
});
