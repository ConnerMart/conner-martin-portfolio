import React from "react";
import project1 from "../assets/project1screenshot.jpg";
import project2 from "../assets/project2screenshot.jpg";

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
  image: {
    width: "50%",
    border: "3px solid #3F4E4F",
    marginBottom: 25,
  },
};

function Projects() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Projects</div>
      <div style={styles.content}>
        <h3>Social Planner App</h3>
        <a
          href="https://dylangriess.github.io/Project1-Social-Calendar/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={project1}
            alt="screenshot of our social planner app"
            style={styles.image}
          />
        </a>
        <h3>Hobby Discussion App</h3>
        <a
          href="https://damp-reaches-02576.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={project2}
            alt="screenshot of our hobby discussion app"
            style={styles.image}
          />
        </a>
        <p>
          <b>(click images to view projects)</b>
        </p>
      </div>
    </div>
  );
}

export default Projects;
