import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./chatSlice";
import MenuSlice from "./MenuSlice";
import SearchSlice from "./SearchSlice";

const store = configureStore({
  reducer: {
    menu: MenuSlice,
    search: SearchSlice,
    chat : chatSlice,
  },
});
export default store;
