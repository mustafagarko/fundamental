import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
    test('to be rendered', () => {
        render(<Input />);
        expect(screen.getByTestId('Input')).toBeInTheDocument();
    });
    test('test inputed value', () => {
        render(<Input />);
        const input: HTMLInputElement = screen.getByTestId('Input');

        fireEvent.change(input, { target: { value: 'just for test' } });
        expect(input.value).toBe('just for test');
    });
});
