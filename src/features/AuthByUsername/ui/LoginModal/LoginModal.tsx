import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './LoginModal.module.scss';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string;
    isOpen: boolean,
    closeModal: () => void
}

export const LoginModal = (props: LoginModalProps) => {
    const {
        className, isOpen, closeModal,
    } = props;

    return (

        <Modal
            className={classNames(cls.LoginModal, {}, [])}
            lazy
            isOpen={isOpen}
            closeModal={closeModal}
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={closeModal} />
            </Suspense>
        </Modal>

    );
};
