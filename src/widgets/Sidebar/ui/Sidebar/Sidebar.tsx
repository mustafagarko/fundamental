import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import { ThemeSwitch } from 'widgets/ThemeSwitch';
import { useTranslation } from 'react-i18next';
import { LangSwitch } from 'widgets/LangSwitch';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import AboutUs from 'shared/assets/icons/aboutus.svg';
import Home from 'shared/assets/icons/home.svg';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);
    function switchSidebar() {
        setCollapsed((prev) => !prev);
    }

    const { t } = useTranslation();

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <div className={cls.items}>
                <AppLink className={cls.item} theme={AppLinkTheme.SECONDARY} to={RoutePaths.main}>
                    <Home className={cls.icon} />
                    <span className={cls.link}>{t('Main Page')}</span>
                </AppLink>
                <AppLink className={cls.item} theme={AppLinkTheme.SECONDARY} to={RoutePaths.about}>
                    <AboutUs className={cls.icon} />
                    <span className={cls.link}>
                        {t('About Page')}
                    </span>
                </AppLink>
            </div>
            <Button
                className={cls.showHideBtn}
                data-testid="sidebarSwitchBtn"
                theme={ThemeButton.PRIMARY_INVERTED}
                onClick={switchSidebar}
                sharpCorners
                size={SizeButton.L}
            >
                {collapsed ? '>' : '<'}
            </Button>

            <div className={cls.switchers}>
                <ThemeSwitch />
                <LangSwitch collapsed={collapsed} />
            </div>
        </div>
    );
};
