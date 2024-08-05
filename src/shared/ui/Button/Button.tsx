import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.sass";

export enum ThemeButton {
    CLEAR = "clear",
    PRIMARY = "primary",
    PRIMARY_INVERTED = "primary-inverted",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, theme, children, ...otherProps } = props;
    return (
        <button
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
