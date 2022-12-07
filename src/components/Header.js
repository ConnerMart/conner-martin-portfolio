import React from "react";

import iconGitHub from "../assets/language-icons/icons8-github-96.png";
import iconLinkedIn from "../assets/language-icons/icons8-linkedin-96.png";

const styles = {
  banner: {
    backgroundColor: "#1C6758",
    display: "flex",
    justifyContent: "space-between",
  },

  title: {
    color: "white",
    // backgroundColor: "#1C6758",
    textAlign: "left",
    padding: "30px 0px 20px 20px",
    fontSize: "3rem",
  },

  allLinks: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },

  linkBlock: {
    display: "flex",
    flexDirection: "row",
    // alignItems: "center",
    // margin: "0px 30px",
  },
  icon: {
    display: "block",
    margin: "10px auto",
    height: "80px",
    width: "80px",
  },
  link: {
    color: "white",
    margin: "auto",
    textDecoration: "none",
    padding: "8px",
    // border: "3px solid #3F4E4F",
    fontSize: "1.5rem",
  },
};

function Header() {
  return (
    <div style={styles.banner}>
      <header>
        <h1 style={styles.title}>Conner Martin</h1>
      </header>

      <div style={styles.allLinks}>
        <div style={styles.linkBlock}>
          <img src={iconGitHub} alt="React" style={styles.icon} />
          <a
            href="https://github.com/ConnerMart"
            style={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

        <div style={styles.linkBlock}>
          <img src={iconLinkedIn} alt="React" style={styles.icon} />
          <a
            href="https://www.linkedin.com/in/conner-martin-723267166/"
            style={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
