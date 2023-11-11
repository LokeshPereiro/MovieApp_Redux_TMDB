import { configureStore } from "@reduxjs/toolkit";
import { homeSlice } from "./slices/renderHome";

export const store = configureStore({
  reducer: {
    home: homeSlice.reducer,
  },
});
