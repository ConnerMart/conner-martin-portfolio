import React from "react";

const styles = {
  footer: {
    backgroundColor: "#1C6758",
    textAlign: "center",
    padding: "20px 0px",
    display: "flex",
    flexDirection: "horizontal",
    justifyContent: "center",
  },
  links: {
    color: "white",
    margin: "0px 50px",
  },
};

function Footer() {
  return (
    <div style={styles.footer}>
      <h3 style={styles.text}>
        <a
          href="https://github.com/ConnerMart"
          style={styles.links}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </h3>
      <h3 style={styles.text}>
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
