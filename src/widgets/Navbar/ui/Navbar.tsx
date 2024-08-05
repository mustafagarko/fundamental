import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.sass";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitch } from "widgets/ThemeSwitch/ui/ThemeSwitch";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;
    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitch></ThemeSwitch>
            <nav className={cls.NavBlock}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/">
                    Main
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                    About
                </AppLink>
            </nav>
        </header>
    );
};
