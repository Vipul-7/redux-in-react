import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // Using toolkit we can now mutate the previous state
    // because react tool kit will handle this, comparing with previous and make changes and then return new
    increment(state) {
      state.counter++;
    },

    increase(state, action) {
      state.counter = state.counter + action.payload;
    },

    decrement(state) {
      state.counter--;
    },

    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
