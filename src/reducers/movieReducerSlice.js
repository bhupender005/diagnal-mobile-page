import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    list: [],
    title: "Loading",
    nextPageNo: 1,
    totalMovies: 0,
  },
  reducers: {
    setList: (state, action) => {
      state.list = [...state.list, ...action.payload];
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setTotalMovies: (state, action) => {
      state.totalMovies = action.payload;
    },
    setNextPageNo: (state) => {
      state.nextPageNo = state.nextPageNo + 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setList, setTitle, setTotalMovies, setNextPageNo } =
  movieSlice.actions;

export const getList = (state) => {
  // console.log(state.movies.list);
  return state.movies.list;
};
export const getListTitle = (state) => state.movies.title;
export const getNextPageNo = (state) => state.movies.nextPageNo;
export const getTotalMovies = (state) => state.movies.totalMovies;

export default movieSlice.reducer;
