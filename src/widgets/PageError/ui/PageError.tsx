import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation();
    const onClick = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <div className={cls.PageErrorContent}>
                <p>
                    {t('UnexpectedError')}
                </p>
                <Button
                    style={{ display: 'block', textDecoration: 'underline' }}
                    onClick={onClick}
                >
                    {t('ReloadPage')}
                </Button>
            </div>
        </div>
    );
};
