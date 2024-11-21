/* eslint-disable i18next/no-literal-string */
/* eslint-disable max-len */
import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { t } = useTranslation();
    const { className } = props;
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => {
        setShowModal((prev) => !prev);
    };
    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <nav className={cls.NavBlock}>
                <Modal setClosed={toggleModal} isOpen={showModal}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi impedit rerum praesentium, quae veniam fugit numquam maxime, vero minima sapiente dignissimos nostrum. Aliquid cum minus excepturi porro repellendus deserunt ut!</Modal>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <Button onClick={toggleModal} theme={ThemeButton.PRIMARY_INVERTED}>Модалка</Button>
            </nav>
        </header>
    );
};
