import React from 'react';
import './Home.css';  // Add styles for layout
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  const resumeUrl = require('../../assets/resume.pdf'); // Assuming the resume PDF is stored in the assets folder

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Shivang_Agarwal_Resume.pdf';
    link.click();
  };

  const handleViewResume = () => {
    window.open(resumeUrl, '_blank');
  };

  return (
    <div className="hero container" id="home">
      <div className="hero-content">
        <h1>I'M Shivang Agarwal!!</h1>
        <p>Software Developer | ML & AI Enthusiast | Polymath</p>
        <button style={{marginRight: "10px"}} onClick={handleDownloadResume}>Download Resume</button>
        <button onClick={handleViewResume}>View Resume</button>
      </div>
      <div className="hero-image">
        <img src={require('../../assets/p3.png')} alt="Shivang" />
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/shivang-agarwal-9063971b8" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a href="https://github.com/Shivang-Agarwal11" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
