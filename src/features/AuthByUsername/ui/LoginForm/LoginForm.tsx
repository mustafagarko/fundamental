/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { loginByUsername } from '../../model/services/loginByUsername.ts/loginByUsername';
import cls from './LoginForm.module.scss';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void
}
const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = (props: LoginFormProps) => {
    const { className, onSuccess } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    const onUsernameChange = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onPasswordChange = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, password, username, onSuccess]);

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('AuthForm')} />
                {error && <Text theme={TextTheme.ERROR} text={t('AuthError')} />}
                <Input
                    autoFocus
                    value={username}
                    onChange={onUsernameChange}
                    type="text"
                    id="username"
                    placeholder={t('EnterUsername')}
                />
                <Input
                    autoFocus
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
        </DynamicModuleLoader>
    );
};

export default LoginForm;
