import { FC, memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = memo((props: NavbarProps) => {
    const { t } = useTranslation();
    const { className } = props;
    const [isAuthModal, setIsAuthModal] = useState(false);
    const user = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const openModal = () => {
        setIsAuthModal(true);
    };
    const closeModal = () => {
        setIsAuthModal(false);
    };
    const onLogout = () => {
        dispatch(userActions.logout());
        localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    };

    if (user) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <nav className={cls.NavBlock}>
                    <Button onClick={onLogout} theme={ThemeButton.PRIMARY_INVERTED}>
                        {t('LogOut')}
                    </Button>
                </nav>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <nav className={cls.NavBlock}>
                {isAuthModal && <LoginModal isOpen={isAuthModal} closeModal={closeModal} />}
                <Button onClick={openModal} theme={ThemeButton.PRIMARY_INVERTED}>
                    {t('LogIn')}
                </Button>
            </nav>
        </header>
    );
});
