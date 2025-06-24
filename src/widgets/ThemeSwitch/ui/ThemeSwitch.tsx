import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme, Theme } from 'app/providers/ThemeProvider';
import DarkBtn from 'shared/assets/icons/dark-theme.svg';
import LightSvg from 'shared/assets/icons/light-theme.svg';
import { Button } from 'shared/ui/Button/Button';
import cls from './ThemeSwitch.module.scss';

interface ThemeSwitchProps {
    className?: string;
}

export const ThemeSwitch = memo(({ className }:ThemeSwitchProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwitch, {}, [className])}
        >
            {theme === Theme.DARK ? <DarkBtn /> : <LightSvg />}
        </Button>
    );
});
