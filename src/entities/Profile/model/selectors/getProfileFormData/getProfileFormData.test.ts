import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileFormData } from './getProfileFormData';

describe('getProfileFormData.test', () => {
    test('should return formData ', () => {
        const formData = {
            firstName: 'name',
            lastName: 'lastName',
            age: 4,
            currency: Currency.USD,
            country: Country.Kazakhstan,
            city: 'Moscow',
            username: 'admin',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: formData,
            },

        };
        expect(getProfileFormData(state as StateSchema)).toEqual(formData);
    });
    test('should work with empty state ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileFormData(state as StateSchema)).toEqual(undefined);
    });
});
