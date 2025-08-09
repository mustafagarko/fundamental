import { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import { ThemeSwitch } from 'widgets/ThemeSwitch';
import { LangSwitch } from 'widgets/LangSwitch';
import { SidebarItems } from 'widgets/Sidebar/model/items';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    function switchSidebar() {
        setCollapsed((prev) => !prev);
    }

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <div className={cls.items}>
                {SidebarItems.map((item) => <SidebarItem collapsed={collapsed} key={item.path} item={item} />)}
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
                <ThemeSwitch className={cls.themeSwitch} />
                <LangSwitch collapsed={collapsed} />
            </div>
        </div>
    );
});
