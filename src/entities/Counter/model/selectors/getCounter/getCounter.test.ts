import { useSelector } from 'react-redux';
import { getCounter } from './getCounter';

describe('Selector test', () => {
    test('state ', () => {
        const state = {
            counter: {
                value: 10,
            },

        };
        expect(getCounter(state)).toEqual({ value: 10 });
    });
});
describe('getCounter.test', () => {
    test('should work correctly', () => {
        expect(1).toEqual(1);
    });
});
