import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterValue: 0 },
  reducers: {
    setCounter(state, action) {
      const value = action.payload;
      state.counterValue = value;
    },
  },
});

export const counterActios = counterSlice.actions;
export default counterSlice.reducer;
