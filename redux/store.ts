import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./redux/slices/contextSlice";

export const store = configureStore({
  reducer: {
    createPost: counterReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
