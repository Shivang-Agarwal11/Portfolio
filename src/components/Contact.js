import React from 'react';
import { data } from '../data';

const Contact = () => {
  const { header } = data;

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-inner">
          <div className="contact-status">
            AVAILABLE FOR NEW OPPORTUNITIES
          </div>
          <h2 className="contact-heading">Let's work together</h2>
          <p className="contact-sub">
            I'm open to roles where AI actually ships — backend-heavy, LLM-heavy,
            production-grade. If you're building something serious, let's talk.
          </p>
          <a href={`mailto:${header.contact.email}`} className="contact-email-btn">
            {header.contact.email}
          </a>
          <div className="contact-socials">
            <a
              href={header.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              GitHub ↗
            </a>
            <a
              href={header.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
