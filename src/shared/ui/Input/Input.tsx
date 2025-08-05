import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

type InputHTMLProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>

interface InputProps extends InputHTMLProps {
    className?: string;
    placeholder?: string;
    id?: string;
    value?: string | number;
    type?: string;
    readonly?: boolean,
    onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
    const {
        className, placeholder, id, value, onChange, readonly, type = 'text', ...otherProps
    } = props;
    const ref = useRef<HTMLInputElement>(null);
    const [active, setActive] = useState(false);
    useEffect(() => {
        if (value?.toString()) setActive(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const onFocus = () => {
        setActive(true);
    };
    const onBlur = () => {
        if (!value?.toString() && !ref?.current?.value) {
            setActive(false);
        }
    };
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };
    const mods = {
        [cls.active]: active,
        [cls.readonly]: readonly,
    };
    return (
        <div className={classNames(cls.InputWrapper, {}, [])}>
            <input
                readOnly={readonly}
                data-testid="Input"
                type={type}
                value={value}
                onChange={onChangeHandler}
                onFocus={onFocus}
                onBlur={onBlur}
                id={id}
                className={classNames(
                    cls.Input,
                    mods,
                    [],
                )}
                ref={ref}
            />
            {placeholder && <label className={cls.label} htmlFor={id}>{placeholder}</label>}
        </div>
    );
});
