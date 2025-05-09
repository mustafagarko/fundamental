import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('Selector test', () => {
    test('state ', () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 10,
            },

        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
describe('getCounter.test', () => {
    test('should work correctly', () => {
        expect(1).toEqual(1);
    });
});
