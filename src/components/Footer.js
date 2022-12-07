import React from "react";

import iconGitHub from "../assets/language-icons/icons8-github-96.png";
import iconLinkedIn from "../assets/language-icons/icons8-linkedin-96.png";

const styles = {
  footer: {
    backgroundColor: "#1C6758",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 75px",
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
  heading: {
    background: "#1C6758",
    minHeight: 50,
    lineHeight: 2.5,
    fontSize: "1.8rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    padding: "0 20px",
  },
};

function Footer() {
  return (
    <div style={styles.footer}>
      <div style={styles.heading}>Find Me On:</div>
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
  );
}

export default Footer;
