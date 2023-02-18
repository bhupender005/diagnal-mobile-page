import React from "react";
import Movie from "./Movie";

export default function MovieContainer({ movies }) {
  const style = {
    movieContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "start",
      background: "black",
      gap: "90px 30px",
      padding: "36px 30px 0",
    },
  };

  return (
    <div style={style.movieContainer}>
      {movies.map((movie, i) => (
        <Movie key={i} movie={movie} />
      ))}
    </div>
  );
}
