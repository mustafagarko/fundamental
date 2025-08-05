import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
    src: string;
    alt: string;
    className?: string;
    size: number
}
export enum AvatarSize {
    S = 30,
    M = 50,
    L = 150
}
export const Avatar = (props: AvatarProps) => {
    const {
        src, alt, className, size = AvatarSize.M,
    } = props;
    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);
    return <img src={src} alt={alt} style={styles} className={classNames(cls.Avatar, {}, [className])} />;
};
