import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { ThemeSwitch } from 'widgets/ThemeSwitch';
import { useTranslation } from 'react-i18next';
import { LangSwitch } from 'widgets/LangSwitch';
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
            <Button
                data-testid="sidebarSwitchBtn"
                theme={ThemeButton.PRIMARY_INVERTED}
                onClick={switchSidebar}
            >
                {collapsed ? t('SidebarCollapsed') : t('SidebarNotCollapsed')}
            </Button>

            <div className={cls.switchers}>
                <ThemeSwitch />
                <LangSwitch />
            </div>
        </div>
    );
};
