import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';
import cls from './MainPage.module.scss';

export default function MainPage() {
    const { t } = useTranslation('main');
    return (
        <div className={cls.MainPage}>
            <p>
                {t('MainTitle')}
            </p>
        </div>
    );
}
