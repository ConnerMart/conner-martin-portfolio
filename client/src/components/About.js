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
    lineHeight: 3.5,
    fontSize: "1.2rem",
    textAlign: "center",
    color: "white",
    padding: "0 20px",
  },
  content: {
    padding: 20,
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
        <p>Here's some text!</p>
        <p>And text!</p>
        <p>And text!</p>
        <p>And text!</p>
        <p>And text!</p>
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
