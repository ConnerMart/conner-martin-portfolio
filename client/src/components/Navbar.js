import React from "react";
import { Link } from "react-router-dom";

const styles = {
  navbar: {
    display: "flex",
    flexDirection: "horizontal",
    justifyContent: "space-evenly",
  },
  text: {
    color: "#3D8361",
    textAlign: "center",
    textDecoration: "none",
  },
};

function Navbar() {
  return (
    <div style={styles.navbar}>
      <h3>
        <Link to="/about" style={styles.text}>
          About Me
        </Link>
      </h3>
      <h3>
        <Link to="/portfolio" style={styles.text}>
          Portfolio
        </Link>
      </h3>
      <h3>
        <Link to="/resume" style={styles.text}>
          Resume
        </Link>
      </h3>
      <h3>
        <Link to="/contact" style={styles.text}>
          Contact
        </Link>
      </h3>
    </div>
  );
}

export default Navbar;
