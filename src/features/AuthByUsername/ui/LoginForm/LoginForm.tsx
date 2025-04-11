/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState.ts/getLoginState';
import { useCallback, useEffect } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername.ts/loginByUsername';
import cls from './LoginForm.module.scss';
import { loginActions } from '../../model/slice/loginSlice';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);
    const onUsernameChange = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);
    const onPasswordChange = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);
    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);
    useEffect(() => {
        dispatch(loginActions.setUsername(''));
        dispatch(loginActions.setPassword(''));
    }, [dispatch]);
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('AuthForm')} />
            {error && <Text theme={TextTheme.ERROR} text={t('AuthError')} />}
            <Input
                value={username}
                onChange={onUsernameChange}
                type="text"
                id="username"
                placeholder={t('EnterUsername')}
            />
            <Input
                value={password}
                onChange={onPasswordChange}
                type="password"
                id="password"
                placeholder={t('EnterPassword')}
            />

            <Button
                onClick={onLoginClick}
                style={{ width: 'fit-content', display: 'block', marginTop: '20px' }}
                theme={ThemeButton.PRIMARY}
                disabled={isLoading}

            >
                {t('LogIn')}
            </Button>
        </div>
    );
};
