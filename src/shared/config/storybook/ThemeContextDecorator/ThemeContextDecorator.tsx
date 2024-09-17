import { Story } from '@storybook/react';

import { Theme, LOCAL_STORAGE_THEME_KEY, ThemeContext }
    from 'app/providers/ThemeProvider/lib/ThemeContext';
import { useState } from 'react';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const ThemeContextDecorator = (Story: Story) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <Story />
        </ThemeContext.Provider>
    );
};
