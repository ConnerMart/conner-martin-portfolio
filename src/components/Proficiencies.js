import React from "react";

import "./Proficiencies.css";

import iconHTML from "../assets/language-icons/icons8-html-5-96.png";
import iconCSS from "../assets/language-icons/icons8-css3-96.png";
import iconJS from "../assets/language-icons/icons8-javascript-logo-100.png";
import iconMongo from "../assets/language-icons/icons8-mongodb-96.png";
import iconExpress from "../assets/language-icons/icons8-express-js-96.png";
import iconReact from "../assets/language-icons/icons8-react-100.png";
import iconNode from "../assets/language-icons/icons8-node-js-96.png";
import iconMySQL from "../assets/language-icons/icons8-mysql-logo-96.png";
import iconGraphQL from "../assets/language-icons/icons8-graphql-an-open-source-data-query-and-manipulation-language-for-api-96.png";
import iconBootstrap from "../assets/language-icons/icons8-bootstrap-96.png";
// import iconCSharp from "../assets/language-icons/icons8-c-sharp-logo-96.png";

const styles = {
  footer: {
    backgroundColor: "#1C6758",
    display: "flex",
    flexDirection: "horizontal",
    justifyContent: "space-evenly",
    margin: "20px 75px",
    borderRadius: "20px",
  },
  proficiency: {},
  icon: {
    display: "block",
    margin: "10px auto",
    width: "50px",
  },
  label: {
    color: "#222222",
    margin: "10px",
    padding: "0px",
    textAlign: "center",
    fontSize: "1.05rem",
    fontFamily: "Roboto Condensed, sans-serif",
  },
};

function Proficiencies() {
  return (
    <div className="profDiv" style={styles.footer}>
      <div className="proficiencies" style={styles.proficiency}>
        <img src={iconJS} alt="JS" style={styles.icon} />
        <h3 style={styles.label}>JavaScript</h3>
      </div>

      <div style={styles.proficiency}>
        <img src={iconHTML} alt="HTML5" style={styles.icon} />
        <h3 style={styles.label}>HTML5</h3>
      </div>

      <div style={styles.proficiency}>
        <img src={iconCSS} alt="CSS3" style={styles.icon} />
        <h3 style={styles.label}>CSS3</h3>
      </div>

      <div style={styles.proficiency}>
        <img src={iconBootstrap} alt="Bootstrap" style={styles.icon} />
        <h3 style={styles.label}>Bootstrap</h3>
      </div>

      <div style={styles.proficiency}>
        <img src={iconMongo} alt="MongoDB" style={styles.icon} />
        <h3 style={styles.label}>MongoDB</h3>
      </div>

      <div style={styles.proficiency}>
        <img src={iconExpress} alt="Express" style={styles.icon} />
        <h3 style={styles.label}>Express</h3>
      </div>

      <div style={styles.proficiency}>
        <img src={iconReact} alt="React" style={styles.icon} />
        <h3 style={styles.label}>React</h3>
      </div>

      <div style={styles.proficiency}>
        <img src={iconNode} alt="Node" style={styles.icon} />
        <h3 style={styles.label}>Node</h3>
      </div>

      <div style={styles.proficiency}>
        <img src={iconMySQL} alt="MySQL" style={styles.icon} />
        <h3 style={styles.label}>MySQL</h3>
      </div>

      <div style={styles.proficiency}>
        <img src={iconGraphQL} alt="GraphQL" style={styles.icon} />
        <h3 style={styles.label}>GraphQL</h3>
      </div>

      {/* <div style={styles.proficiency}>
        <img src={iconCSharp} alt="C#" style={styles.icon} />
        <h3 style={styles.label}>C#</h3>
      </div> */}
    </div>
  );
}

export default Proficiencies;
