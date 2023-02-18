import React from "react";
import missingPoster from "../assets/images/placeholder_for_missing_posters.png";

function Movie({ movie: { "poster-image": imagePath, name: movieName } }) {
  // const movieName = "Movie Name";

  const style = {
    movieTitle: {
      paddingTop: 24,
      fontSize: 20,
      textAlign: "left",
    },
  };

  let image = missingPoster;

  try {
    image = require(`../assets/images/${imagePath}`);
  } catch (e) {
    console.warn(e);
  }

  return (
    <div>
      <img src={image} alt={movieName} width="182" height="272" />
      <div style={style.movieTitle}>{movieName}</div>
    </div>
  );
}

export default Movie;
