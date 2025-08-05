import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername.ts/loginByUsername';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { updateProfileData } from './updateProfileData';
import { ValidateProfileError } from '../../types/profile';

const data = {
    firstName: 'name',
    lastName: 'lastName',
    age: 4,
    currency: Currency.USD,
    country: Country.Kazakhstan,
    city: 'Moscow',
    username: 'admin',
};

describe('updateProfileData.test', () => {
    test('success update', async () => {
        const fetchProfileThunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        fetchProfileThunk.api.put.mockReturnValue(Promise.resolve({ data }));
        const loginResult = await fetchProfileThunk.callThunk();
        expect(fetchProfileThunk.api.put).toHaveBeenCalled();
        expect(loginResult.payload).toEqual(data);
        expect(loginResult.meta.requestStatus).toBe('fulfilled');
    });
    test('failed update', async () => {
        const fetchProfileThunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        fetchProfileThunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const loginResult = await fetchProfileThunk.callThunk();

        expect(loginResult.meta.requestStatus).toBe('rejected');
        expect(loginResult.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });
    test('validate error', async () => {
        const fetchProfileThunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: {
                    ...data, firstName: '',
                },
            },
        });
        fetchProfileThunk.api.put.mockReturnValue(Promise.resolve({ data }));
        const loginResult = await fetchProfileThunk.callThunk();

        expect(loginResult.meta.requestStatus).toBe('rejected');
        expect(loginResult.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
});
