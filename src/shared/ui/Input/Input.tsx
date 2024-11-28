import { classNames } from 'shared/lib/classNames/classNames';
import React, { InputHTMLAttributes, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Input.module.scss';

type InputHTMLProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends InputHTMLProps {
    className?: string;
    placeholder?: string;
    id?: string;
    value?: string;
    type?: string;
    onChange?: (value: string) => void;
}

export const Input = (props: InputProps) => {
    const {
        className, placeholder, id, value, onChange, type = 'text', ...otherProps
    } = props;
    const { t } = useTranslation();
    const ref = useRef<HTMLInputElement>(null);
    const [active, setActive] = useState(false);

    const onFocus = () => {
        setActive(true);
    };
    const onBlur = () => {
        if (!value && !ref.current.value) {
            setActive(false);
        }
    };
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.InputWrapper, {}, [])}>
            <input
                data-testid="Input"
                type={type}
                value={value}
                onChange={onChangeHandler}
                onFocus={onFocus}
                onBlur={onBlur}
                id={id}
                className={classNames(
                    cls.Input,
                    { [cls.active]: active },
                    [],
                )}
                ref={ref}
            />
            {placeholder && <label className={cls.label} htmlFor={id}>{placeholder}</label>}
        </div>
    );
};
