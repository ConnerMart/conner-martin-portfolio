import React from "react";

const styles = {
  text: {
    color: "white",
    backgroundColor: "#1C6758",
    textAlign: "center",
    padding: "30px 0px 20px 0px",
    fontSize: "3rem",
  },
};

function Header() {
  return (
    <header className="header">
      <h1 style={styles.text}>Conner Martin</h1>
    </header>
  );
}

export default Header;
