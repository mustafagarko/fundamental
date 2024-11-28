/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
    MouseEvent, ReactNode,
    useCallback,
    useEffect,
    useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface ModalProps {
    className?: string;
    isOpen: boolean;
    closeModal: () => void;
    children: ReactNode,
    lazy?: boolean,
}

export const Modal = (props: ModalProps) => {
    const {
        className, isOpen, closeModal, children, lazy,
    } = props;

    const [isMounted, setIsMounted] = useState(false);
    const { theme } = useTheme();
    const mods = { [cls.opened]: isOpen };
    const contentClick = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    const handleEsc = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    }, [closeModal]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
        }
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [isOpen, handleEsc]);
    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    if (lazy && !isMounted) return null;

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme])}>
                <div onClick={closeModal} className={cls.overlay}>
                    <div onClick={(e) => contentClick(e)} className={cls.content}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
