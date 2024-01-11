import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mock-component';
import MiniPlayer from './mini-player';


describe('Component: MiniPlayer', () => {
    it('should render correct', () => {
        const miniPlayerTestId = 'miniPlayer'; 
        const fakePlayerProps = {
            previewVideoLink: '',
            previewImage: '',
            muted: true,
            width: 100,
            height: 100,
            isActive: false,
        };
        render(withHistory(<MiniPlayer {...fakePlayerProps} />));

        expect(screen.getByTestId(miniPlayerTestId)).toBeInTheDocument();
    });
});