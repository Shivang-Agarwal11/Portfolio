import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio";
import Education from "./components/Education";
import Contact from "./components/Contact";
import "./index.css";

const App = () => {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return (
    <div>
      <Navbar />
      <Home />
      <Experience />
      <Portfolio />
      <Education />
      <Contact />
      <footer className="footer">
        <p>
          Built with precision by <span className="accent">Shivang Agarwal</span> &mdash; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default App;
