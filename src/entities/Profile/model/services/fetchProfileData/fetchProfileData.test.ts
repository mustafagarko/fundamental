import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername.ts/loginByUsername';
import { fetchProfileData } from './fetchProfileData';

describe('fetchProfileData.test', () => {
    test('success fetch', async () => {
        const userValue = { username: '123', id: '1' };
        const loginThunk = new TestAsyncThunk(loginByUsername);
        loginThunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
        const loginResult = await loginThunk.callThunk({ username: '123', password: '123' });
        expect(loginResult.meta.requestStatus).toBe('fulfilled');

        // const profileData = {
        //     firstName: 'Ivan',
        //     lastName: 'Ivanov',
        //     age: 27,
        //     currency: 'RUB',
        //     country: 'Russia',
        //     city: 'Moscow',
        //     username: 'admin',
        //     avatar: 'https://www.svgrepo.com/show/382106/male-avatar-boy-face-man-user-9.svg',
        // };
        // const thunk = new TestAsyncThunk(fetchProfileData);
        // thunk.api.post.mockReturnValue(Promise.resolve({ data: profileData }));
        // const result = await thunk.callThunk();
        // expect(result.meta.requestStatus).toBe('fulfilled');
        // expect(result.meta.requestStatus).toBe('fulfilled');
        // expect(mockedAxios.post).toHaveBeenCalled();
        // expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setUserData(userValue));
        // expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        // expect(result.payload).toBe(userValue);
    });
});
