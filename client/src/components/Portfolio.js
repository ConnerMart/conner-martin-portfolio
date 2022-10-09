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
};

function Portfolio() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Portfolio</div>
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

export default Portfolio;
