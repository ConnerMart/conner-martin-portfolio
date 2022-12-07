import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
// import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Proficiencies from "./components/Proficiencies";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
// import Contact from "./components/Contact";

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

// TODO: change tab icon
// TODO: clear out all boilerplate

// TODO: pick nicer FONT(s)

// TODO: replace resume with new version
// TODO: add resume to page itself along WITH download button

// TODO: make whole app mobile-friendly

// https://www.credly.com/badges/765606fb-356e-4581-ad8c-d512131efdc4/linked_in?t=rm4rtt
