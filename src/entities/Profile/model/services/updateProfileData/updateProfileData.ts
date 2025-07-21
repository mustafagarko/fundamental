import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkExtraConfig } from 'app/providers/StoreProvider';
import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData';
import { Profile } from '../../types/profile';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkExtraConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;
        try {
            const profileData = getProfileFormData(getState());
            const response = await extra.api.put<Profile>('/profile', profileData);
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
