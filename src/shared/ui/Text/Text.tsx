import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export const enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface TextProps {
    title?: string,
    text?: string,
    theme?: TextTheme
}

export const Text = (props: TextProps) => {
    const { title, text, theme = TextTheme.PRIMARY } = props;
    const mods = {
        [cls[theme]]: true,
    };
    return (
        <div className={classNames(cls.Text, mods, [])}>
            <p className={cls.title}>{title}</p>
            <p className={cls.text}>{text}</p>
        </div>
    );
};
