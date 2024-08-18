// src/Portfolio.js
import React from "react";

const Portfolio = () => {
  return (
    <div className="portfolio container" id="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio-grid">
        <a href="https://github.com/Shivang-Agarwal11/django3-flightfarepro" target="_blank">
          <div className="portfolio-item">
            <img src={require("../assets/flight_fare.jpeg")} alt="FareCalc" />
            <div className="overlay">
              <h3>FareCalc</h3>
              <p>A simple tool to predict flight fares</p>
            </div>
          </div>
        </a>
        <a href="https://github.com/Shivang-Agarwal11/Mail-Automation" target="_blank">
        <div className="portfolio-item">
          <img src={require("../assets/email.png")} alt="Email Automation" />
          <div className="overlay">
            <h3>MailAutomate</h3>
            <p>A simple tool to send custom mails in bulk by reading a CSV.</p>
          </div>
        </div>
        </a>
        {/* Add other portfolio items similarly */}
      </div>
      <button>View More</button>
    </div>
  );
};

export default Portfolio;
