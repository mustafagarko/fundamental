import { DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { StateSchema } from 'app/providers/StoreProvider';
import { StoreProvider } from 'app/providers/StoreProvider/ui/StoreProvider';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import testConfig from 'shared/config/i18n/i18nForTests';

export interface RenderComponentOptions {
    route?: string,
    initialState?: DeepPartial<StateSchema>
}
export function renderComponent(component: ReactNode, options: RenderComponentOptions =
{ route: '/' }) {
    const { route, initialState } = options;
    return (
        render(
            <StoreProvider initialState={initialState as StateSchema}>
                <MemoryRouter initialEntries={[route]}>
                    <I18nextProvider i18n={testConfig}>
                        {component}
                    </I18nextProvider>
                </MemoryRouter>
            </StoreProvider>,
        ));
}
