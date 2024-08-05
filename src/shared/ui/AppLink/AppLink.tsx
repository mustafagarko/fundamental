import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.sass";
import { Link, LinkProps } from "react-router-dom";

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        children,
        theme = AppLinkTheme.PRIMARY,
        className,
        ...otherProps
    } = props;
    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
