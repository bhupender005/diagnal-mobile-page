import React from "react";
import Movie from "./Movie";
import PropTypes from "prop-types";
function MovieContainer({ movies }) {
  const style = {
    movieContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "start",
      background: "black",
      gap: "90px 30px",
      padding: "96px 30px 0",
    },
  };

  return (
    <div style={style.movieContainer}>
      {movies.map((movie, i) => (
        <Movie key={i} movie={movie} index={i} />
      ))}
    </div>
  );
}

MovieContainer.propTypes = {
  movies: PropTypes.array,
};

export default MovieContainer;
