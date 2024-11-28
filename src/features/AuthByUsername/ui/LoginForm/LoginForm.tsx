/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input type="text" id="username" placeholder={t('EnterUsername')} />
            <Input type="password" id="password" placeholder={t('EnterPassword')} />

            <Button
                style={{ width: 'fit-content', display: 'block', marginTop: '20px' }}
                theme={ThemeButton.PRIMARY}
            >
                {t('LogIn')}
            </Button>
        </div>
    );
};
