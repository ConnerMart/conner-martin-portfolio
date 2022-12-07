import React from "react";

import iconGitHub from "../assets/language-icons/icons8-github-96.png";
import iconLinkedIn from "../assets/language-icons/linkedin-icon-new.png";

const styles = {
  banner: {
    backgroundColor: "#1C6758",
    display: "flex",
    justifyContent: "space-between",
  },

  title: {
    color: "#222222",
    textAlign: "left",
    padding: "30px 0px 20px 20px",
    fontSize: "3rem",
    margin: "0",
  },

  allLinks: {
    display: "flex",
    justifyContent: "flex-end",
  },

  linkBlock: {
    display: "flex",
    flexDirection: "row",
    alignItems: "space-between",
  },
  icon: {
    display: "block",
    margin: "10px auto",
    marginRight: "20px",
    height: "72px",
    width: "72px",
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
          <a
            href="https://github.com/ConnerMart"
            style={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            <img src={iconGitHub} alt="GitHub" style={styles.icon} />
          </a>
        </div>
        <div style={styles.linkBlock}>
          <a
            href="https://www.linkedin.com/in/conner-martin-723267166/"
            style={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            <img src={iconLinkedIn} alt="LinkedIn" style={styles.icon} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
