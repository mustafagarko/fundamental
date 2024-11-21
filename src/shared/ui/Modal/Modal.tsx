/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable i18next/no-literal-string */
import {
    MouseEvent, ReactNode,
    useCallback,
    useEffect,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface ModalProps {
    className?: string;
    isOpen: boolean;
    setClosed: () => void;
    children: ReactNode
}

export const Modal = (props: ModalProps) => {
    const {
        className, isOpen, setClosed, children,
    } = props;

    const { theme } = useTheme();
    const mods = { [cls.opened]: isOpen, [cls[theme]]: true };
    const contentClick = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    const handleEsc = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            setClosed();
        }
    }, [setClosed]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
        }
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [isOpen, handleEsc]);

    const closeModal = () => {
        if (setClosed) {
            setClosed();
        }
    };

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div onClick={closeModal} className={cls.overlay}>
                    <div onClick={(e) => contentClick(e)} className={cls.content}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
