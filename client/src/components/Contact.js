import React from "react";

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

function Contact() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Contact</div>
      <div style={styles.content}>
        <p>Here's some text!</p>
        <p>And text!</p>
        <p>And text!</p>
        <p>And text!</p>
        <p>And text!</p>
        <p>And text!</p>
        <p>And text!</p>
      </div>
    </div>
  );
}

export default Contact;
