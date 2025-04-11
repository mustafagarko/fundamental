import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface LoginByusernameProps {
    username: string,
    password: string
}
export const loginByUsername = createAsyncThunk<User, LoginByusernameProps, {rejectValue: string}>(
    'login/loginByusername',
    async (userData, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8000/login', userData);
            if (!response.data) throw new Error();
            thunkAPI.dispatch(userActions.setUserData(response.data));
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
