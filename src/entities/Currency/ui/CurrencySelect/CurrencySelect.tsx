import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean
}

const options = (Object.keys(Currency) as Array<keyof typeof Currency>)
    .map((el) => ({ value: el, label: el }));

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        className, value, onChange, readonly,
    } = props;
    const { t } = useTranslation('profile');
    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);
    return (
        <Select
            label={t('YourCurrency')}
            onChange={onChangeHandler}
            value={value}
            options={options}
            className={className}
            readonly={readonly}
        />
    );
});
