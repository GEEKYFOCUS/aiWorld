import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  like: false,
  repost: false,
};
const postAction = createSlice({
  name: "post",
  initialState,
  reducers: {},
});
