import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

const styles = {
  body: {
    backgroundColor: "#3F4E4F",
    height: "100vh",
  },
};

function App() {
  return (
    <Router>
      <body style={styles.body}>
        <div>
          <Header />
          <Navbar />
          <Routes>
            <Route path="/react-portfolio" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </body>
    </Router>
  );
}

export default App;
