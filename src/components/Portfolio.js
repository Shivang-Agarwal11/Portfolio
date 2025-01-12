import React from "react";
import "./Portfolio.css"; // Ensure you have a corresponding CSS file for styling

const Portfolio = () => {
  // Portfolio items array for reusability
  const portfolioItems = [
    {
      title: "FareCalc",
      description: "A simple tool to predict flight fares",
      image: require("../assets/flight_fare.jpeg"),
      link: "https://github.com/Shivang-Agarwal11/django3-flightfarepro",
    },
    {
      title: "MailAutomate",
      description: "A simple tool to send custom mails in bulk by reading a CSV.",
      image: require("../assets/email.png"),
      link: "https://github.com/Shivang-Agarwal11/Mail-Automation",
    },
    {
      title: "Smart Home",
      description: "A smart home device management service.",
      image: require("../assets/smart.png"),
      link: "https://github.com/Shivang-Agarwal11/smart-house-device-management",
    },
  ];

  return (
    <div className="portfolio container" id="portfolio">
      <h1 style={{color:"white"}}>Projects</h1>
      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
            <div className="portfolio-item">
              <img src={item.image} alt={item.title} className="portfolio-image" />
              <div className="overlay">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
