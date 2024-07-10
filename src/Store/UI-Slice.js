import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "UI",
  initialState: { dark: true },
  reducers: {
    changeMode(state) {
      state.dark = !state.dark;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
