import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button', () => {
    test('to be rendered', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button>Button</Button>);
        expect(screen.getByText('Button')).toBeInTheDocument();
    });
    test('theme props', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button theme={ThemeButton.PRIMARY}>Button</Button>);
        expect(screen.getByText('Button')).toHaveClass('primary');
        screen.debug();
    });
});
