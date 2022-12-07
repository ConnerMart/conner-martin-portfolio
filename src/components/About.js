import React from "react";
// import { useState } from "react";

import profilepic from "../assets/profilepic.jpg";
import badge from "../assets/boot-camp-badge.png";

const styles = {
  // heading: {
  //   background: "#1C6758",
  //   minHeight: 50,
  //   lineHeight: 2.5,
  //   fontSize: "2rem",
  //   fontWeight: "bold",
  //   textAlign: "center",
  //   color: "#222222",
  //   padding: "0 20px",
  // },
  card: {
    margin: "20px 75px",
    minHeight: 750,
    background: "#3D8361",
    display: "flex",
    borderRadius: "20px",
  },
  leftCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 85px",
  },
  image: {
    height: "400px",
    border: "3px solid #3F4E4F",
    margin: "auto auto",
    position: "relative",
    borderRadius: "20px",
  },
  rightCol: {},
  paragraphs: {
    padding: "0px 60px",
    textAlign: "center",
    marginTop: "195px",
  },
  badge: {
    display: "block",
    margin: "0 auto",
    width: "250px",
  },
  text: {},
};

function About() {
  return (
    <>
      {/* <div style={styles.heading}>About Me</div> */}
      <div style={styles.card}>
        <div style={styles.leftCol}>
          <img src={profilepic} alt="conner profile pic" style={styles.image} />
        </div>

        <div style={styles.rightCol}>
          <div style={styles.paragraphs}>
            <p style={styles.text}>
              I am a software developer with experience in <b>JavaScript</b>,
              the <b>MERN</b> stack, <b>GraphQL</b>, and more. As a recent
              graduate of the University of Denver's Full Stack Coding Boot
              Camp, I am excited to continue my programming journey and expand
              my knowledge by learning new languages and technologies.
            </p>
            <p style={styles.text}>
              I also have a master's degree in Professional Writing and have
              experience with content writing, editing, and SEO practices. I am
              especially passionate about all forms of storytelling and love any
              opportunity to bring creativity into my work.
            </p>
          </div>

          <a
            href="https://www.credly.com/badges/765606fb-356e-4581-ad8c-d512131efdc4/linked_in?t=rm4rtt"
            target="_blank"
            rel="noreferrer"
            style={styles.badge}
          >
            <img
              src={badge}
              alt="denver full-stack boot camp badge"
              style={styles.badge}
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
