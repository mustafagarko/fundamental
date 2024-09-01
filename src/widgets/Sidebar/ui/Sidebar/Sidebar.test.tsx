import { fireEvent, render, screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import { renderWithTranslation }
    from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('to be rendered', () => {
        const SidebarWithTranslation = withTranslation()(Sidebar);
        renderWithTranslation(<SidebarWithTranslation />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('sidebar toggle button', () => {
        renderWithTranslation(<Sidebar />);
        const btn = screen.getByTestId('sidebarSwitchBtn');
        fireEvent.click(btn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
