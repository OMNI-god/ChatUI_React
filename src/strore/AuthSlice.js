import { createSlice } from "@reduxjs/toolkit";
import { apiCall } from "../APICalls/APICall";

const initialState = {
  isLoggedIn: false,
  data: undefined,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "Auth",
  initialState: initialState,
  reducers: {
    logout(state) {
      state.data = initialState;
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
    },
  },
});

export const auth_service = (url, config) => {
  return async (dispatch) => {
    try {
      dispatch(authActions.setLoading(true));
      const data = await apiCall(url, config);
      console.log(data);
      if (data?.userId && data?.csrfToken) {
        localStorage.setItem("UserID", data.userId);
        sessionStorage.setItem("antiforgeryToken", data.csrfToken);
      }
      dispatch(authActions.setData(data));
    } catch (error) {
      dispatch(
        authActions.setError(error.message || "Error communicating with server")
      );
    } finally {
      dispatch(authActions.setLoading(false));
    }
  };
};

export const authActions = authSlice.actions;
export default authSlice;
