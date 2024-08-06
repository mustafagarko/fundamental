import { FC, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.sass";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { ThemeSwitch } from "widgets/ThemeSwitch/ui/ThemeSwitch";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import { LangSwitch } from "widgets/LangSwitch";

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
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                theme={ThemeButton.PRIMARY_INVERTED}
                onClick={switchSidebar}
            >
                {collapsed ? t("SidebarCollapsed") : t("SidebarNotCollapsed")}
            </Button>

            <div className={cls.switchers}>
                <ThemeSwitch />
                <LangSwitch />
            </div>
        </div>
    );
};
