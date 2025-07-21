import { Country, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile,
    isLoading?: boolean,
    error?: string
    readonly?: boolean,
    onLastNameChange?: (value?: string) => void,
    onFirstNameChange?: (value?: string) => void,
    onAgeChange?: (value?: string) => void,
    onCityChange?: (value?: string) => void,
    onAvatarChange?: (value?: string) => void,
    onUsernameChange?: (value?: string) => void,
    onCurrencyChange?: (value?: Currency) => void,
    onCountryChange?: (value?: Country) => void,
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        error,
        isLoading,
        readonly,
        onFirstNameChange,
        onLastNameChange,
        onAgeChange,
        onCityChange,
        onAvatarChange,
        onUsernameChange,
        onCurrencyChange,
        onCountryChange,
    } = props;

    const { t } = useTranslation('profile');
    const mods: Mods = {
        [cls.isEditing]: !readonly,
    };

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [cls.isLoading])}>
                <Loader />
            </div>
        );
    }
    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [cls.error])}>
                <Text theme={TextTheme.ERROR} title={t('ProfileError')} text={t('TryToReload')} />
            </div>
        );
    }
    if (!data) return null;
    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            {data.avatar && (
                <div className={cls.avatarWrapper}>
                    <Avatar src={data.avatar} alt={data?.avatar} size={AvatarSize.L} />
                </div>
            )}

            <Input
                onChange={onFirstNameChange}
                readonly={readonly}
                value={data.firstName}
                placeholder={t('YourFirstName')}
            />
            <Input
                onChange={onLastNameChange}
                readonly={readonly}
                value={data.lastName}
                placeholder={t('YourLastName')}
            />
            <Input
                onChange={onAgeChange}
                readonly={readonly}
                value={data?.age}
                placeholder={t('Age')}
            />
            <Input
                onChange={onCityChange}
                readonly={readonly}
                value={data.city}
                placeholder={t('City')}
            />
            <Input
                onChange={onUsernameChange}
                readonly={readonly}
                value={data.username}
                placeholder={t('Username')}
            />
            <Input
                onChange={onAvatarChange}
                readonly={readonly}
                value={data.avatar}
                placeholder={t('Avatar')}
            />
            <CurrencySelect
                readonly={readonly}
                onChange={onCurrencyChange}
                value={data?.currency}
            />
            <CountrySelect
                readonly={readonly}
                onChange={onCountryChange}
                value={data?.country}
            />
        </div>
    );
};
