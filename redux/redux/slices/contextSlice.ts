import { createSlice } from "@reduxjs/toolkit";

interface CreateState {
  post: boolean;
}

const initialState: CreateState = {
  post: false,
};

export const contextSlice = createSlice({
  name: "createPost",
  initialState,
  reducers: {
    togglePost: (state) => {
      state.post = !state.post;
    },
    closePost: (state) => {
      state.post = false;
    },
    openPost: (state) => {
      state.post = true;
    },
  },

  // Other reducer functions...
});

export const { togglePost, closePost, openPost } = contextSlice.actions;      
export default contextSlice.reducer;
