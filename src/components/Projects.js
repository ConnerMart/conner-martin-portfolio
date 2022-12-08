import React from "react";

import scheduler from "../assets/work-day-scheduler.png";
import noteTaker from "../assets/note-taker-screenshot.png";
import teamProfile from "../assets/team-profile-screenshot.jpg";

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
  project: {
    padding: 10,
    textAlign: "center",
  },
  image: {
    width: "600px",
    border: "3px solid #3F4E4F",
    marginBottom: 25,
  },
};

function Projects() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Projects</div>

      <div style={styles.project}>
        <h2>Workday Scheduler</h2>
        <a
          href="https://connermart.github.io/work-day-scheduler/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={scheduler} alt="workday scheduler" style={styles.image} />
        </a>
      </div>

      <div style={styles.project}>
        <h2>Team Profile Generator</h2>
        <a
          href="https://github.com/ConnerMart/team-profile-generator"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={teamProfile}
            alt="team profile generator"
            style={styles.image}
          />
        </a>
      </div>

      <div style={styles.project}>
        <h2>Note-Taker</h2>
        <a
          href="https://connermart.github.io/note-taker/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={noteTaker} alt="note-taker" style={styles.image} />
        </a>
      </div>
    </div>
  );
}

export default Projects;
