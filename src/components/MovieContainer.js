import React from "react";
import Movie from "./Movie";

export default function MovieContainer({ movies }) {
  const style = {
    movieContainer: {
      display: "flex",
      maxWidth: 1084,
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      background: "black",
      paddingTop: 36,
      rowGap: 90,
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
