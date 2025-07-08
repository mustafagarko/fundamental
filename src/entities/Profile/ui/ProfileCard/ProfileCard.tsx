import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { className } = props;
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);

    if (!data) return null;
    return (
        <div className={classNames('cls.ProfileCard', {}, [className])}>
            <div>
                <Text title={t('Profile')} />
                <p className={cls.text}>{data.firstName}</p>
                <p className={cls.text}>{data.lastName}</p>
                <p className={cls.text}>{data.age}</p>
            </div>
        </div>
    );
};
