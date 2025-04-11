import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
    PRIMARY = 'primary',
    PRIMARY_INVERTED = 'primary-inverted',
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clear-inverted'
}
export enum SizeButton {
   M = 'size_m',
   L = 'size_l',
   XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    size?: SizeButton
    sharpCorners?: boolean,
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className, theme, size, sharpCorners = false, children, disabled, ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls[size]]: true,
        [cls.sharpCorners]: sharpCorners,
        [cls.disabled]: disabled,
    };
    return (
        <button
            disabled={disabled}
            type="button"
            className={classNames(cls.Button, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
