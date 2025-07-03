import { createSlice } from "@reduxjs/toolkit";
import { apiCall } from "../APICalls/APICall";

const initialState = {
    isLoggedIn: false,
    data: {},
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: "Auth",
    initialState: initialState,
    reducers: {
        logout(state) {
            state.data = {};
            state.error = null;
            state.isLoading = false;
            state.isLoggedIn = false;
        },
        setLoading(state, action) {
            state.isLoading = action.payload;
        },
        setData(state, action) {
            state.data = action.payload;
            state.isLoggedIn = true;
        },
        setError(state, action) {
            state.error = action.payload;
        }
    }
});

const user_service = (url, config) => {
    return async (dispatch) => {
        try {
            dispatch(authActions.setLoading(true));
            const data = await apiCall(url, config);
            dispatch(authActions.setData(data));
        }
        catch (error) {
            dispatch(authActions.setError(error.message||"Error communicating with server"));
        }
        finally {
            dispatch(authActions.setLoading(false));
        }
    }
};

export const authActions = authSlice.actions;
export default authSlice;