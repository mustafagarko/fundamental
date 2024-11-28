import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import cls from './LoginModal.module.scss';

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
            <LoginForm />
        </Modal>

    );
};
