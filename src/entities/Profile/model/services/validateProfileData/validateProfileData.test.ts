import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfileData } from './validateProfileData';
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

describe('validateProfileData.test', () => {
    test('success validation', () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });
    test('no firstname and lastname', () => {
        const result = validateProfileData({ ...data, firstName: '', lastName: '' });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
    test('no country', () => {
        const result = validateProfileData({ ...data, country: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });
    test('no age', () => {
        const result = validateProfileData({ ...data, age: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });
    test('empty data', () => {
        const result = validateProfileData();
        expect(result).toEqual([ValidateProfileError.NO_DATA]);
    });
    test('no firstname and country', () => {
        const result = validateProfileData({ ...data, firstName: '', country: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA, ValidateProfileError.INCORRECT_COUNTRY]);
    });
    test('age is NaN', () => {
        const result = validateProfileData({ ...data, age: Number('string') });
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });
});
