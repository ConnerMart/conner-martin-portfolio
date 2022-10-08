import React from "react";

const styles = {
  text: {
    color: "white",
    backgroundColor: "purple",
    textAlign: "center",
    padding: "35px 0px",
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
