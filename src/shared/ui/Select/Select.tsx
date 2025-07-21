import { classNames } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent, memo, ReactEventHandler, useCallback, useMemo,
} from 'react';
import cls from './Select.module.scss';

interface Option {
    label: string,
    value: string
}
interface SelectProps {
    options:Option[];
    className?: string;
    readonly?: boolean;
    value?: string;
    label?: string
    onChange?: (value: string) => void
}

export const Select = memo((props: SelectProps) => {
    const {
        className, options, readonly, value, label, onChange,
    } = props;
    const optionsList = useMemo(() => options.map((opt) => (
        <option
            className={cls.option}
            key={opt.value}
            value={opt.value}
            label={opt.label}
        />
    )), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={cls.wrapper}>
            {label && <span className={cls.label}>{`${label}:`}</span>}
            <select
                onChange={onChangeHandler}
                value={value}
                disabled={readonly}
                className={classNames(cls.select, {}, [className])}
            >
                {optionsList}
            </select>
        </div>
    );
});
