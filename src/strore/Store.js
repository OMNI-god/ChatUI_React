import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice";
import messageSlice from "./MessageSlice";

const store = configureStore({
  reducer: { auth: authSlice.reducer, msg: messageSlice.reducer },
});

export default store;
