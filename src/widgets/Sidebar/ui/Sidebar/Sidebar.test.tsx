import { fireEvent, render, screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import { renderWithTranslation }
    from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { MemoryRouter } from 'react-router-dom';
import { renderComponent } from 'shared/lib/tests/renderComponent/renderComponent';
import { routeConfig, RoutePaths } from 'shared/config/routeConfig/routeConfig';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('to be rendered', () => {
        const SidebarWithTranslation = withTranslation()(Sidebar);
        renderComponent(<SidebarWithTranslation />, { route: RoutePaths.main });
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('sidebar toggle button', () => {
        renderComponent(<Sidebar />, { route: RoutePaths.main });
        const btn = screen.getByTestId('sidebarSwitchBtn');
        fireEvent.click(btn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
