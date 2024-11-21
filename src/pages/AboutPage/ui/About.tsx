import { useTranslation } from 'react-i18next';
import cls from './About.module.scss';

export default function About() {
    const { t } = useTranslation('about');
    return (
        <div className={cls.About}>
            <h1>{t('AboutTitle')}</h1>
        </div>
    );
}
