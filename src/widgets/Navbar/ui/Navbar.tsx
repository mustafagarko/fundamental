import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.sass";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitch } from "widgets/ThemeSwitch/ui/ThemeSwitch";
import { useTranslation } from "react-i18next";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { t } = useTranslation();
    const { className } = props;
    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <nav className={cls.NavBlock}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/">
                    {t("NavbarMain")}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                    {t("NavbarAbout")}
                </AppLink>
            </nav>
        </header>
    );
};
