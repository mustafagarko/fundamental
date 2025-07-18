import axios from 'axios';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername.test', () => {
    // let dispatch: Dispatch;
    // let getState: () => StateSchema;

    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // });
    // test('success login', async () => {
    //     const userValue = { username: '123', id: '1' };
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
    //     const action = loginByUsername({ username: '123', password: '123' });
    //     const result = await action(dispatch, getState, undefined);
    //     console.log(result);
    //     expect(result.meta.requestStatus).toBe('fulfilled');
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(dispatch).toHaveBeenCalledWith(userActions.setUserData(userValue));
    //     expect(dispatch).toHaveBeenCalledTimes(3);
    //     expect(result.payload).toBe(userValue);
    // });
    // test('error login', async () => {
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    //     const action = loginByUsername({ username: '123', password: '123' });
    //     const result = await action(dispatch, getState, undefined);
    //     expect(result.meta.requestStatus).toBe('rejected');
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(dispatch).toHaveBeenCalledTimes(2);
    //     expect(result.payload).toBe('error');
    // });
    test('success login', async () => {
        const userValue = { username: '123', id: '1' };
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
        const result = await thunk.callThunk({ username: '123', password: '123' });
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setUserData(userValue));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(result.payload).toBe(userValue);
    });
    test('error login', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk({ username: '123', password: '123' });
        expect(result.meta.requestStatus).toBe('rejected');
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.payload).toBe('error');
    });
});
