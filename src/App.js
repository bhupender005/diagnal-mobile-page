import "./App.css";
import React, { useEffect, useCallback, useState } from "react";
import MovieContainer from "./components/MovieContainer";
import Loader from "./components/Loader";
import NavBar from "./components/NavBar";
// import { fetchMovieList } from "./api/api";
import { fetchMovies } from "./actions/movies";
import {
  getList,
  getTotalMovies,
  getNextPageNo,
  getListTitle,
} from "./reducers/movieReducerSlice";

import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const movies = useSelector(getList);
  const totalMovies = useSelector(getTotalMovies);
  const nextPageNo = useSelector(getNextPageNo);
  const title = useSelector(getListTitle);
  const [context, setContext] = useState("");

  const fetchMoreData = useCallback(
    (page) => {
      dispatch(fetchMovies(page));
    },
    [dispatch]
  );

  useEffect(() => {
    fetchMoreData(1);
  }, [fetchMoreData]);

  const filterMovies = (data) =>
    data.filter(
      ({ name: movie }) =>
        movie.toLowerCase().search(context.toLowerCase()) > -1
    );

  return (
    <div className="App">
      <Loader isReady={movies.length > 0}>
        <header>
          <NavBar title={title} search={setContext} />
        </header>
        <section>
          <InfiniteScroll
            dataLength={movies.length}
            next={() => fetchMoreData(nextPageNo)}
            hasMore={movies.length < totalMovies}
            loader={<h4>Loading...</h4>}
          >
            <MovieContainer movies={filterMovies(movies)} />
          </InfiniteScroll>
        </section>
      </Loader>
    </div>
  );
}

export default App;
