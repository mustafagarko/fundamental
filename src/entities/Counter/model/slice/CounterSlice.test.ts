import { DeepPartial } from '@reduxjs/toolkit';
import { counterActions, counterReducer } from './CounterSlice';
import { CounterState } from '../types/counterSchema';

describe('counterSlice test', () => {
    test('increment', () => {
        const state: CounterState = {
            value: 10,

        };
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
    });
    test('decrement', () => {
        const state: CounterState = {
            value: 10,

        };
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
    });
    test('from undefined', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
});
