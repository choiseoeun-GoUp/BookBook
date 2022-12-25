import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "page",
  initialState: { pageValue: 1 },
  reducers: {
    setPaging(state, action) {
      const value = action.payload;
      state.pageValue = value;
    },
  },
});

export const pageActios = pageSlice.actions;
export default pageSlice.reducer;
