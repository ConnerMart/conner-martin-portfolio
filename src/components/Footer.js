import React from "react";

const styles = {
  footer: {
    backgroundColor: "#1C6758",
    display: "flex",
    flexDirection: "horizontal",
    justifyContent: "space-evenly",
    margin: "20px 75px",
  },
  links: {
    color: "white",
    margin: "0px 125px",
    textDecoration: "none",
    padding: "8px",
    border: "3px solid #3F4E4F",
    fontSize: "1.5rem",
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
