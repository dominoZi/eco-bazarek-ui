import { createSlice } from "@reduxjs/toolkit";
import { CounterSliceState } from ".";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  } as CounterSliceState,
  reducers: {
    addOne: (state) => {
      state.count += 1;
    },
    minusOne: (state) => {
      state.count -= 1;
    },
  },
});
