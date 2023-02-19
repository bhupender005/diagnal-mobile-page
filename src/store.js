import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./reducers/movieReducerSlice";

export default configureStore({
  reducer: {
    movies: movieSlice,
  },
});
