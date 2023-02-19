import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import backArrow from "../assets/images/Back.png";
import navBar from "../assets/images/nav_bar.png";
import searchIcon from "../assets/images/search.png";

function NavBar({ title, search }) {
  const [movieToSearch, setMovieToSearch] = useState("");
  const [show, setShow] = useState(false);

  const style = {
    container: {
      overflow: "hidden",
      position: "fixed",
      background: `transparent url(${navBar})`,
      backgroundSize: "666px 110px",
      top: 0,
      width: 606,
      height: 60,
    },
    navTitle: {
      fontSize: 28,
      paddingLeft: 20,
      position: "relative",
      top: "-4px",
    },
    searchBox: {
      hide: {
        display: "none",
      },
      show: {
        display: "inline",
        marginRight: 10,
        position: "relative",
        top: "-8px",
      },
    },
  };

  useEffect(() => {
    search(movieToSearch);
  }, [movieToSearch, search]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "30px 30px 0",
        ...style.container,
      }}
    >
      <div>
        <img src={backArrow} alt="Navigate Back" width="30" />
        <span style={style.navTitle}>{title}</span>
      </div>
      <div>
        <input
          type="text"
          value={movieToSearch}
          onChange={(e) => setMovieToSearch(e.target.value)}
          style={show ? style.searchBox.show : style.searchBox.hide}
        />
        <img
          src={searchIcon}
          alt="Search"
          width="30"
          onClick={() => setShow((currentStatus) => !currentStatus)}
        />
      </div>
    </div>
  );
}

NavBar.propTypes = {
  title: PropTypes.string,
};

NavBar.defaultProps = {
  title: "Loading",
};

export default NavBar;
