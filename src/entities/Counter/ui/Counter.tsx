import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/CounterSlice';

export const Counter = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const count = useSelector(getCounterValue);
    function increment() {
        dispatch(counterActions.increment());
    }
    function decrement() {
        dispatch(counterActions.decrement());
    }
    return (
        <div>
            <p data-testid="value-counter">
                {`${t('Count')}:${count}`}
            </p>
            <Button
                data-testid="increment-btn"
                theme={ThemeButton.PRIMARY_INVERTED}
                onClick={increment}
            >
                {t('Increment')}
            </Button>
            <Button
                data-testid="decrement-btn"
                theme={ThemeButton.PRIMARY_INVERTED}
                onClick={decrement}
            >
                {t('Decrement')}
            </Button>

        </div>
    );
};
