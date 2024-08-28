import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

// компонент для тестирвоания ErrorBoundary
export const BugButton = () => {
    const [error, setError] = useState(false);
    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    const onThrow = () => {
        setError(true);
    };
    const { t } = useTranslation();

    return (
        <Button onClick={onThrow}>
            {t('CallError')}
        </Button>
    );
};
