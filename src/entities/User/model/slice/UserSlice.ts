import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {
    _inited: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        setInited: (state) => {
            state._inited = true;
        },
        logout: (state) => {
            state.authData = undefined;
        },

    },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;

export const { reducer: userReducer } = userSlice;
