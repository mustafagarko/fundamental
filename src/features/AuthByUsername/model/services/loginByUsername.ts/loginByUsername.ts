import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkExtraConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface LoginByusernameProps {
    username: string,
    password: string
}
export const loginByUsername = createAsyncThunk<User, LoginByusernameProps, ThunkExtraConfig<string>>(
    'login/loginByusername',
    async (userData, thunkAPI) => {
        const { dispatch, rejectWithValue, extra } = thunkAPI;
        try {
            const response = await extra.api.post('/login', userData);
            if (!response.data) throw new Error();
            dispatch(userActions.setUserData(response.data));
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            extra.navigate?.('/profile');
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
