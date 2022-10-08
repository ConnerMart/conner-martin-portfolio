import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
