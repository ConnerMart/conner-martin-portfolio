import React from "react";
import resume from "../assets/Conner-Martin-Resume.docx";

const styles = {
  card: {
    margin: "20px 75px",
    minHeight: 750,
    background: "#3D8361",
  },
  heading: {
    background: "#1C6758",
    minHeight: 50,
    lineHeight: 2.5,
    fontSize: "2rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "#222222",
    padding: "0 20px",
  },
  content: {
    padding: 10,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#3F4E4F",
    padding: 7,
    border: "3px solid #1C6758",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
};

function Resume() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Resume</div>
      <div style={styles.content}>
        <h3>Proficiencies:</h3>
        <ul style={styles.list}>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Node</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>React</li>
        </ul>
        <button style={styles.button}>
          <a href={resume} target="_blank" rel="noreferrer" style={styles.link}>
            Download Resume
          </a>
        </button>
      </div>
    </div>
  );
}

export default Resume;
