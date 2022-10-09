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
    fontSize: "1.8rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    padding: "0 20px",
  },
  content: {
    padding: 10,
    textAlign: "center",
  },
  image: {
    width: "35%",
    border: "5px solid #3F4E4F",
  },
};

function Resume() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Resume</div>
      <div style={styles.content}>
        <p>Here's some text!</p>
        <p>
          <a href={resume} target="_blank" rel="noreferrer">
            Download Resume
          </a>
        </p>
      </div>
    </div>
  );
}

export default Resume;
