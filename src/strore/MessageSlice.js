import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiCall } from "../APICalls/APICall";

export const fetchMessages = createAsyncThunk(
  "messages/fetch",
  async ({ url, config }, { rejectWithValue }) => {
    try {
      const messages = await apiCall(url, config);
      return messages;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch messages");
    }
  }
);

const messageSlice = createSlice({
  name: "Messages",
  initialState: {
    chats: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addMessage(state, action) {
      state.chats.push(action.payload);
    },
    prependMessages(state, action) {
      state.chats = [...action.payload, ...state.chats];
    },
    clearMessages(state) {
      state.chats = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.chats = action.payload;
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const messageActions = messageSlice.actions;
export default messageSlice;
