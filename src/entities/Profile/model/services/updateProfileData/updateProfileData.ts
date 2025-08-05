import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkExtraConfig } from 'app/providers/StoreProvider';
import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData';
import { Profile, ValidateProfileError } from '../../types/profile';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkExtraConfig<ValidateProfileError[]>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;
        const profileData = getProfileFormData(getState());
        const errors = validateProfileData(profileData);
        if (errors.length) {
            return rejectWithValue(errors);
        }
        try {
            const response = await extra.api.put<Profile>('/profile', profileData);
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);
