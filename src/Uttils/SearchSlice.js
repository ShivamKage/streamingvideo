import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: { data:{}
  },
  reducers: {
    addCache: (state, action) => {
      state.data= {...state.data,...action.payload}
    },
  },
});

export const { addCache } = searchSlice.actions;
export default searchSlice.reducer;
