import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { profileActions, profileReducer } from './ProfileSlice';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
    firstName: 'name',
    lastName: 'lastName',
    age: 4,
    currency: Currency.USD,
    country: Country.Kazakhstan,
    city: 'Moscow',
    username: 'admin',
};
describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({ readonly: true });
    });
    test('test updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: {
                firstName: '123',
            },

        };
        expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({
            firstName: 'Name',
        }))).toEqual({
            form: {
                firstName: 'Name',
            },
        });
    });
    test('test cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: {
                firstName: 'Different',
                currency: Currency.RUB,
            },
            readonly: false,
            validateErrors: [],

        };
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
            form: data,
            data,
            readonly: true,
            validateErrors: undefined,
        });
    });
    test('test updateProfileData.pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            validateErrors: [ValidateProfileError.SERVER_ERROR],
            isLoading: false,

        };
        expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });
    test('test updateProfileData.fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ''))).toEqual({
            data,
            form: data,
            validateErrors: undefined,
            isLoading: false,
            readonly: true,
        });
    });
});
