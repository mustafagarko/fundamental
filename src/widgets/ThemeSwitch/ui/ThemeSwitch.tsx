import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitch.module.sass";
import { useTheme } from "app/providers/ThemeProvider";
import DarkBtn from "shared/assets/icons/dark-theme.svg";
import LightSvg from "shared/assets/icons/light-theme.svg";
import { Theme } from "app/providers/ThemeProvider";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitchProps {
    className?: string;
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({ className, children }) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwitch, {}, [className])}
        >
            {theme === Theme.DARK ? <DarkBtn /> : <LightSvg />}
        </Button>
    );
};
