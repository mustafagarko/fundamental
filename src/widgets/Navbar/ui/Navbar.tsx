import { FC, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername/ui/LoginModal/LoginModal';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { t } = useTranslation();
    const { className } = props;
    const [isAuthModal, setIsAuthModal] = useState(false);

    const openModal = () => {
        setIsAuthModal(true);
    };
    const closeModal = () => {
        setIsAuthModal(false);
    };

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <nav className={cls.NavBlock}>
                <LoginModal isOpen={isAuthModal} closeModal={closeModal} />
                <Button onClick={openModal} theme={ThemeButton.PRIMARY_INVERTED}>
                    {t('LogIn')}
                </Button>
            </nav>
        </header>
    );
};
