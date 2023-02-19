import React from "react";
import PropTypes from "prop-types";
import missingPoster from "../assets/images/placeholder_for_missing_posters.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Movie({
  movie: { "poster-image": imagePath, name: movieName },
  index,
}) {
  const style = {
    container: {
      width: 182,
    },
    movieTitle: {
      paddingTop: 24,
      fontSize: 20,
      textAlign: "left",
      wordBreak: "break-all",
    },
  };

  let image = missingPoster;

  try {
    image = require(`../assets/images/${imagePath}`);
  } catch (e) {
    console.warn(e);
  }

  return (
    <div style={style.container}>
      <LazyLoadImage
        alt={movieName}
        height="272"
        src={image}
        width="182"
        placeholder={
          <img src={missingPoster} alt={movieName} width="182" height="272" />
        }
      />
      <div style={style.movieTitle}>{movieName}</div>
      {/* `${index} - ${movieName}` */}
    </div>
  );
}

Movie.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    "poster-image": PropTypes.string.isRequired,
  }),
  index: PropTypes.number,
};

export default Movie;
