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
{ }) {
    const { route = '/', initialState } = options;
    return (
        render(
            <MemoryRouter initialEntries={[route]}>
                <StoreProvider initialState={initialState as StateSchema}>
                    <I18nextProvider i18n={testConfig}>
                        {component}
                    </I18nextProvider>
                </StoreProvider>
            </MemoryRouter>,
        ));
}
