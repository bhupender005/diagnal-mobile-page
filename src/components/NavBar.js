import React from "react";
import backArrow from "../assets/images/Back.png";
// import navBar from "../assets/images/nav_bar.png";
import searchIcon from "../assets/images/search.png";

function NavBar({ title = "Romantic Comedy" }) {
  const style = {
    navTitle: {
      fontSize: 28,
      paddingLeft: 20,
      position: "relative",
      top: "-4px",
    },
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "30px 30px 0",
      }}
    >
      <div>
        <img src={backArrow} alt="Navigate Back" width="30" />
        <span style={style.navTitle}>{title}</span>
      </div>
      <div>
        <img src={searchIcon} alt="Search" width="30" />
      </div>
    </div>
  );
}

export default NavBar;
