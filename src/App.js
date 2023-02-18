import "./App.css";
import React, { useState, useEffect } from "react";
import MovieContainer from "./components/MovieContainer";
import Loader from "./components/Loader";
import NavBar from "./components/NavBar";
import { fetchMovieList } from "./api/api";

function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    fetchMovieList().then((result) => {
      console.log(result);
      setTitle(result.page.title);
      setMovies(result.page["content-items"].content);
      setReady(true);
    });
  }, []);

  return (
    <div className="App">
      <Loader isReady={ready}>
        <header>
          <NavBar title={title} />
        </header>
        <section>
          <MovieContainer movies={movies} />
        </section>
      </Loader>
    </div>
  );
}

export default App;
