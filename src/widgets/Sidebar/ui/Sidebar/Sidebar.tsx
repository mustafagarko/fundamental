import { FC, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.sass";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);
    function switchSidebar() {
        setCollapsed((prev) => !prev);
    }
    return (
        <div
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                theme={ThemeButton.PRIMARY_INVERTED}
                onClick={switchSidebar}
            >
                Toggle
            </Button>
        </div>
    );
};
