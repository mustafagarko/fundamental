import { Profile, ValidateProfileError } from '../../types/profile';

export const validateProfileData = (profile?: Profile) => {
    const errors: ValidateProfileError[] = [];

    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }

    const {
        firstName, lastName, age, country,
    } = profile;

    if (!firstName?.trim() || !lastName?.trim()) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }

    return errors;
};
