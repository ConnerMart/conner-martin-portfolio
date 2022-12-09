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
    fontFamily: "Roboto Condensed, sans-serif",
  },
  project: {
    padding: 10,
    textAlign: "center",
  },
  image: {
    width: "600px",
    border: "3px solid #3F4E4F",
    marginBottom: 5,
  },
  title: {
    fontFamily: "Roboto Condensed, sans-serif",
  },
  description: {
    margin: "2% 25%",
    fontFamily: "Roboto Condensed, sans-serif",
  },
};

function Projects() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Projects</div>

      <div style={styles.project}>
        <h2 style={styles.title}>Workday Scheduler</h2>
        <a
          href="https://connermart.github.io/work-day-scheduler/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={scheduler} alt="workday scheduler" style={styles.image} />
        </a>
        <p style={styles.description}>
          A scheduling application that shows the hours in a standard workday,
          color-coded based on whether an hour block is in the past, present, or
          future.
        </p>
      </div>

      <div style={styles.project}>
        <h2 style={styles.title}>Team Profile Generator</h2>
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
        <p style={styles.description}>
          A command-line application that allows the user to input data for
          different members of a team. The application then renders a team
          profile as an HTML file, with cards displaying each team member's
          information.
        </p>
      </div>

      <div style={styles.project}>
        <h2 style={styles.title}>Note-Taker</h2>
        <a
          href="https://connermart.github.io/note-taker/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={noteTaker} alt="note-taker" style={styles.image} />
        </a>
        <p style={styles.description}>
          An application that allows the user to enter notes. Notes are saved to
          a JSON file and displayed on the left-hand side of the page, and
          previous notes can be viewed by clicking on them.
        </p>
      </div>
    </div>
  );
}

export default Projects;
