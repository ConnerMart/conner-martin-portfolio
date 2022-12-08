import React from "react";

// TODO:
import resume from "../assets/Conner-Martin-Resume.docx";
import resumeExp from "../assets/resume-experience.png";
import resumeEdu from "../assets/resume-education.png";

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
    fontSize: "2.5rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "#222222",
    padding: "0 20px",
  },
  content: {
    padding: 10,
    textAlign: "center",
  },

  resumePage: {
    height: "850px",
    margin: "25px 10px",
  },
  button: {
    backgroundColor: "#3F4E4F",
    padding: 7,
    border: "3px solid #1C6758",
    margin: "15px auto",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
    fontSize: "1rem",
  },
  // list: {
  //   listStyle: "none",
  //   padding: 0,
  // },
};

function Resume() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Resume</div>
      <div style={styles.content}>
        <div>
          <img
            src={resumeExp}
            alt="resume experience page"
            style={styles.resumePage}
          />
          <img
            src={resumeEdu}
            alt="resume educaiton page"
            style={styles.resumePage}
          />
        </div>
        <button style={styles.button}>
          <a href={resume} target="_blank" rel="noreferrer" style={styles.link}>
            Click to Download Resume as a Word Doc
          </a>
        </button>
      </div>
    </div>
  );
}

export default Resume;
