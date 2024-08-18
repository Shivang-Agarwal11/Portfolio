// src/ContactMe.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-me" id="contact">
      <h1>Contact Me</h1>
      <div className="contact-boxes">
        {/* <div className="contact-box">
          <h3>Mobile</h3>
          <p>+123-456-7890</p>
        </div> */}
        <div className="contact-box">
          <h3>Email</h3>
          <p>shivangagarwal11.sa@gmail.com</p>
        </div>
        <div className="contact-box">
          <h3>LinkedIn</h3>
          <p><a href="https://www.linkedin.com/in/shivang-agarwal-9063971b8" target="_blank" rel="noopener noreferrer">Shivang Agarwal</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
