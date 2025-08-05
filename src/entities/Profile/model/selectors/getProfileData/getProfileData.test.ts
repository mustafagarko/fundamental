import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should return data ', () => {
        const data = {
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
                data,
            },

        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
