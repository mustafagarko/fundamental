import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadonly);

    const { t } = useTranslation('profile');
    const onEditClick = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);
    const onSaveClick = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);
    const onCancelClick = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);
    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Profile')} />
            {readonly ? (
                <Button onClick={onEditClick} theme={ThemeButton.PRIMARY}>
                    {t('Edit')}
                </Button>
            ) : (
                <div className={cls.buttons}>
                    <Button onClick={onSaveClick} theme={ThemeButton.PRIMARY}>
                        {t('Save')}
                    </Button>
                    <Button onClick={onCancelClick} theme={ThemeButton.PRIMARY}>
                        {t('Cancel')}
                    </Button>
                </div>
            )}

        </div>
    );
};
