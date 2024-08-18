// src/App.js
import React, { useEffect } from "react";
import Home from "./components/Home/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import "./style.css";
import Navbar from "./components/Navbar/Navbar";
import Experience from "./components/Experience/Experience";

const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in");
      elements.forEach((element) => {
        const { top } = element.getBoundingClientRect();
        if (top < window.innerHeight) {
          element.classList.add("visible");
        } else {
          element.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check in case elements are already in view

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* <Navbar /> */}
      <section id="home" className="fade-in">
        <Home />
      </section>
      <section id="about" className="fade-in">
        <About />
      </section>
      <section id="portfolio" className="fade-in">
        <Portfolio />
      </section>
      <section id="experience" className="fade-in">
        <Experience />
      </section>
      {/* <section id="contact" className="fade-in">
        <Contact />
      </section> */}
    </div>
  );
};

export default App;
