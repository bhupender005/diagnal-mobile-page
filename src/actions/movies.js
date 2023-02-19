import {
  setList,
  setTitle,
  setTotalMovies,
  setNextPageNo,
} from "../reducers/movieReducerSlice";

import { fetchMovieList } from "../api/api";

const fetchMovies = (page) => (dispatch) => {
  fetchMovieList(page).then((response) => {
    dispatch(setTotalMovies(response.page["total-content-items"]));
    dispatch(setList(response.page["content-items"].content));
    dispatch(setTitle(response.page.title));
    dispatch(setNextPageNo());
  });
};

export { fetchMovies };
