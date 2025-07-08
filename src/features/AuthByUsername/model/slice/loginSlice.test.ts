import { loginActions, loginReducer } from './loginSlice';
import { LoginSchema } from '../types/loginSchema';

describe('loginSlice.test', () => {
    test('set username test', () => {
        const state: DeepPartial<LoginSchema> = { username: '12' };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('12345'))).toEqual({ username: '12345' });
    });
    test('set password test', () => {
        const state: DeepPartial<LoginSchema> = { password: '12' };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('12345'))).toEqual({ password: '12345' });
    });
});
