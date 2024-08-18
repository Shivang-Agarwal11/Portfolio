// src/Portfolio.js
import React from 'react';

const Portfolio = () => {
  return (
    <div className="portfolio container" id="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <img src={require("../assets/flight_fare.jpeg")} alt="FareCalc" />
          <div className="overlay">
            <h3>FareCalc</h3>
            <p>A simple tool to predict flight fares</p>
          </div>
        </div>
        <div className="portfolio-item">
          <img src={require("../assets/email.png")} alt="Email Automation"/>
          <div className="overlay">
            <h3>MailAutomate</h3>
            <p>A simple tool to send custom mails in bulk by reading a CSV.</p>
          </div>
        </div>
        {/* Add other portfolio items similarly */}
      </div>
      <button>View More</button>
    </div>
  );
};

export default Portfolio;
