import { createSlice } from "@reduxjs/toolkit";

//Global State por each page
export const homeSlice = createSlice({
  name: "home",
  initialState: {
    url: {},
    genres: {},
  },
  reducers: {
    //To get images URL_Obj from api
    setImgsApiConfig: (state, { payload }) => {
      state.url = payload;
    },
    getGenres: (state, { payload }) => {
      state.genres = payload;
    },
  },
});
export const { setImgsApiConfig, getGenres } = homeSlice.actions;
