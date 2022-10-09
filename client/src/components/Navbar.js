import React from "react";
import { Link } from "react-router-dom";

const styles = {
  navbar: {
    backgroundColor: "#3D8361",
    display: "flex",
    flexDirection: "horizontal",
    justifyContent: "space-evenly",
    margin: "20px 75px",
  },
  text: {
    color: "white",
    textAlign: "center",
    textDecoration: "none",
    background: "#1C6758",
    padding: 10,
    fontSize: "1.3rem",
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
