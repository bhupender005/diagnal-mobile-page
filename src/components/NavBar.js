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
      maxWidth: "calc(100% - 60px)",
    },
    navTitle: {
      show: {
        fontSize: 28,
        paddingLeft: 20,
        position: "relative",
        top: "-4px",
      },
      hide: {
        display: "none",
      },
    },
    searchBox: {
      hide: {
        display: "none",
      },
      show: {
        display: "inline",
        marginLeft: 20,
        position: "relative",
        top: "-8px",
        padding: 8,
        border: "4px double #000000",
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
        <img
          src={backArrow}
          alt="Navigate Back"
          width="30"
          onClick={() => setMovieToSearch("")}
        />
        <span style={show ? style.navTitle.hide : style.navTitle.show}>
          {title}
        </span>
        <input
          type="text"
          value={movieToSearch}
          onChange={(e) => setMovieToSearch(e.target.value)}
          style={show ? style.searchBox.show : style.searchBox.hide}
          placeholder="Type movie name to search"
        />
      </div>
      <div>
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
