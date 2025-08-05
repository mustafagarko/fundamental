import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername.ts/loginByUsername';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { fetchProfileData } from './fetchProfileData';

const data = {
    firstName: 'name',
    lastName: 'lastName',
    age: 4,
    currency: Currency.USD,
    country: Country.Kazakhstan,
    city: 'Moscow',
    username: 'admin',
};

describe('fetchProfileData.test', () => {
    test('success fetch', async () => {
        const fetchProfileThunk = new TestAsyncThunk(fetchProfileData);
        fetchProfileThunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const loginResult = await fetchProfileThunk.callThunk();
        expect(loginResult.meta.requestStatus).toBe('fulfilled');
        expect(fetchProfileThunk.api.get).toHaveBeenCalled();
        expect(loginResult.payload).toEqual(data);
    });
    test('failed fetch', async () => {
        const fetchProfileThunk = new TestAsyncThunk(fetchProfileData);
        fetchProfileThunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const loginResult = await fetchProfileThunk.callThunk();
        expect(loginResult.meta.requestStatus).toBe('rejected');
    });
});
