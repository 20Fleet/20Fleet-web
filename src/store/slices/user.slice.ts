import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface UserState {
    currentUser: any;
}

const initialState: UserState = {
    currentUser: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signUpUser: (state, action) => {
            state.currentUser = action.payload;
        },
        signInUser: (state, action) => {
            state.currentUser = action.payload;
        },
        signOutUser: (state) => {
            state.currentUser = null;
        }
    },
});

export const { signUpUser, signInUser } = userSlice.actions;

export default userSlice.reducer;