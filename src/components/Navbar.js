import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const styles = {
  navbar: {
    backgroundColor: "#3F4E4F",
    display: "flex",
    flexDirection: "horizontal",
    justifyContent: "space-evenly",
    margin: "0 150px",
  },
  text: {
    color: "#222222",
    textAlign: "center",
    textDecoration: "none",
    background: "#1C6758",
    padding: "10px 15px",
    fontSize: "1.5rem",
    border: "2px solid black",
    borderRadius: "20px",
    fontFamily: "Roboto Condensed, sans-serif",
  },
};

function Navbar() {
  return (
    <div className="navbarDiv" style={styles.navbar}>
      <h3>
        <Link to="/about" style={styles.text}>
          Home/About
        </Link>
      </h3>
      <h3>
        <Link to="/projects" style={styles.text}>
          Projects
        </Link>
      </h3>
      <h3>
        <Link to="/resume" style={styles.text}>
          Resume
        </Link>
      </h3>
    </div>
  );
}

export default Navbar;
