import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { loginByUsername } from '../services/loginByUsername.ts/loginByUsername';

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
};

export const LoginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state, action) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(loginByUsername.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: loginActions } = LoginSlice;

export const { reducer: loginReducer } = LoginSlice;
