import { StateSchema } from 'app/providers/StoreProvider';
import { getValidateErrors } from './getValidateErrors';
import { ValidateProfileError } from '../../types/profile';

describe('getValidateErrors.test', () => {
    test('should return INCORRECT_COUNTRY ', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [ValidateProfileError.INCORRECT_COUNTRY],
            },

        };
        expect(getValidateErrors(state as StateSchema)).toEqual(['INCORRECT_COUNTRY']);
    });
    test('should return [INCORRECT_COUNTRY, NO_DATA, INCORRECT_AGE] ', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileError.INCORRECT_COUNTRY,
                    ValidateProfileError.NO_DATA,
                    ValidateProfileError.INCORRECT_AGE,
                ],
            },

        };
        expect(getValidateErrors(state as StateSchema)).toEqual(['INCORRECT_COUNTRY', 'NO_DATA', 'INCORRECT_AGE']);
    });

    test('should work with empty state ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
