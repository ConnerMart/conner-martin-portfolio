import React from "react";
import profilepic from "../assets/profilepic.jpg";

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

function About() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>About Me</div>
      <div style={styles.content}>
        <p>
          I am currently a student at the University of Denver's Fullstack
          Coding Boot Camp.
        </p>
        <p>I am looking forward to developing my knowledge and skills!</p>
        <img
          src={profilepic}
          alt="conner profile pic"
          style={styles.image}
        ></img>
      </div>
    </div>
  );
}

export default About;
