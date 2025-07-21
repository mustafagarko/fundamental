import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchProfileData, getProfileData, ProfileCard, profileReducer,
    getProfileIsLoading, getProfileError,
    getProfileReadonly,
    profileActions,
    getProfileFormData,
} from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import cls from './ProfilePage.module.scss';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

interface ProfilePageProps {
    className?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = (props: ProfilePageProps) => {
    const { className } = props;
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const data = useSelector(getProfileData);
    const formData = useSelector(getProfileFormData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const onFirstNameChange = useCallback((value?:string) => {
        dispatch(profileActions.updateProfile({ firstName: value }));
    }, [dispatch]);

    const onLastNameChange = useCallback((value?:string) => {
        dispatch(profileActions.updateProfile({ lastName: value }));
    }, [dispatch]);

    const onAgeChange = useCallback((value?:string) => {
        if (!value) {
            dispatch(profileActions.updateProfile({ age: 0 }));
        }
        const isValid = value && /^[0-9]+$/.test(value);
        if (isValid) dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    }, [dispatch]);

    const onCityChange = useCallback((value?:string) => {
        dispatch(profileActions.updateProfile({ city: value }));
    }, [dispatch]);

    const onAvatarChange = useCallback((value?:string) => {
        dispatch(profileActions.updateProfile({ avatar: value }));
    }, [dispatch]);

    const onUsernameChange = useCallback((value?:string) => {
        dispatch(profileActions.updateProfile({ username: value }));
    }, [dispatch]);
    const onCurrencyChange = useCallback((value?:Currency) => {
        dispatch(profileActions.updateProfile({ currency: value }));
    }, [dispatch]);

    const onCountryChange = useCallback((value?:Country) => {
        dispatch(profileActions.updateProfile({ country: value }));
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
            <ProfilePageHeader />
            <ProfileCard
                data={formData}
                error={error}
                isLoading={isLoading}
                readonly={readonly}
                onFirstNameChange={onFirstNameChange}
                onLastNameChange={onLastNameChange}
                onAgeChange={onAgeChange}
                onCityChange={onCityChange}
                onAvatarChange={onAvatarChange}
                onUsernameChange={onUsernameChange}
                onCurrencyChange={onCurrencyChange}
                onCountryChange={onCountryChange}

            />
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
