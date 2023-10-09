import { createSlice } from "@reduxjs/toolkit";

//Global State por each page
export const homeSlice = createSlice({
  name: "home",
  initialState: {
    url: {},
    genres: {},
  },
  reducers: {
    getApiConfig: (state, { payload }) => {
      state.url = payload;
    },
    getGenres: (state, { payload }) => {
      state.genres = payload;
    },
  },
});
export const { getApiConfig, getGenres } = homeSlice.actions;
