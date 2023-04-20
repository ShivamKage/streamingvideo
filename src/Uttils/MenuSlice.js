import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menuSlice",
  initialState: {
    MenuIsOpen: true,
  },
  reducers: {
    toogle: (state) => {
      state.MenuIsOpen = !state.MenuIsOpen;
    },
    close: (state) => {
      state.MenuIsOpen = false;
    },
    open: (state) => {
      state.MenuIsOpen = true;
    },
  },
});

export const {toogle,close,open} = menuSlice.actions;
export default menuSlice.reducer;
