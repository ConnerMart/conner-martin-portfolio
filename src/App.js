import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Proficiencies from "./components/Proficiencies";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

const styles = {
  body: {
    backgroundColor: "#3F4E4F",
    height: "100%",
  },
};

function App() {
  return (
    <Router>
      <Header />
      <section style={styles.body}>
        <Navbar />
        <Routes>
          <Route path="/react-portfolio" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </section>
      <Proficiencies />
    </Router>
  );
}

export default App;

//
//
// TODO:

// clear out all boilerplate

// pick nicer FONT(s)
// change tab icon

// make app mobile-friendly
// have navbar, proficiencies stack

// add DESCRIPTIONS (from readmes) to projects
