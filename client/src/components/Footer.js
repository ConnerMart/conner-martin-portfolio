import React from "react";

const styles = {
  footer: {
    backgroundColor: "#1C6758",
    textAlign: "center",
    padding: "20px 0px",
    display: "flex",
    flexDirection: "horizontal",
    justifyContent: "center",
    position: "fixed",
    bottom: 0,
    width: "100%",
  },
  links: {
    color: "white",
    margin: "0px 125px",
    textDecoration: "none",
    padding: "8px",
    border: "3px solid #3D8361",
  },
};

function Footer() {
  return (
    <div style={styles.footer}>
      <h3>
        <a
          href="https://github.com/ConnerMart"
          style={styles.links}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </h3>
      <h3>
        <a
          href="https://www.linkedin.com/in/conner-martin-723267166/"
          style={styles.links}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </h3>
    </div>
  );
}

export default Footer;
