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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <img src={profilepic} alt="conner profile pic" style={styles.image} />
      </div>
    </div>
  );
}

export default About;
