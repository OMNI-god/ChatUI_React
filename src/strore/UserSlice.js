import { createAsyncThunk } from "@reduxjs/toolkit";

export const searchUser = createAsyncThunk(
  "user/fetch",
  async ({ url, config }, { rejectWithValue }) => {
    try {
    } catch (error) {}
  }
);
