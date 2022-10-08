import React from "react";
import { Link } from "react-router-dom";

const styles = {
  navbar: {
    display: "flex",
    flexDirection: "horizontal",
    justifyContent: "space-evenly",
  },
  text: {
    color: "purple",
    textAlign: "center",
  },
};

function Navbar() {
  return (
    <div style={styles.navbar}>
      <h3 style={styles.text}>
        <Link to="/about">About Me</Link>
      </h3>
      <h3 style={styles.text}>
        <Link to="/portfolio">Portfolio</Link>
      </h3>
      <h3 style={styles.text}>
        <Link to="/resume">Resume</Link>
      </h3>
      <h3 style={styles.text}>
        <Link to="/contact">Contact</Link>
      </h3>
    </div>
  );
}

export default Navbar;
