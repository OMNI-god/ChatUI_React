import { createSlice } from "@reduxjs/toolkit";
import { data } from "autoprefixer";

const authSlice = createSlice({
    name: "Auth",
    initialState: {
        isLoggedIn: false,
        data: []
    },
    reducers: {
        login(state, action) {
            state.isLoggedIn = !state.isLoggedIn;
        },
        setData(state, action) {
            state.data = action.payload;
        }
    }
})

export const authActions=authSlice.actions;
export default authSlice;