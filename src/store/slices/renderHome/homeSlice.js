import { createSlice } from "@reduxjs/toolkit";

//Global State por each page
export const homeSlice = createSlice({
  name: "home",
  initialState: {
    url: {},
    genres: {},
    endpoint: "",
  },
  reducers: {
    //To get images URL_Obj from api
    setImgsApiConfig: (state, { payload }) => {
      state.url = payload;
    },
    setAllGenres: (state, { payload }) => {
      state.genres = payload;
    },
  },
});
export const { setImgsApiConfig, setAllGenres } = homeSlice.actions;
