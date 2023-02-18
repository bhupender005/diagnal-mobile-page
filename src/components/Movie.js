import React from "react";
import missingPoster from "../assets/images/placeholder_for_missing_posters.png";

function Movie({ movie = {} }) {
  const movieName = "Movie Name";

  const style = {
    movieTitle: {
      paddingTop: 24,
      fontSize: 20,
      textAlign: "left",
    },
  };

  return (
    <div>
      <img src={missingPoster} alt={movieName} />
      <div style={style.movieTitle}>{movieName}</div>
    </div>
  );
}

export default Movie;
