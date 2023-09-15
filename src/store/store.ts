import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from ".";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
