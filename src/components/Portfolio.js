import React from 'react';
import { data } from '../data';

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const Portfolio = () => {
  return (
    <section id="projects" className="section section-alt2">
      <div className="container">
        <p className="section-label">selected work</p>
        <h2 className="section-heading">Projects</h2>
        <div className="projects-grid">
          {data.projects.map((proj, i) => (
            <a
              key={i}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <div className="project-card-header">
                <span className="project-title">{proj.title}</span>
                <span className="project-link-icon">
                  <ArrowIcon />
                </span>
              </div>
              <p className="project-desc">{proj.description}</p>
              <div className="project-tech">
                {proj.techStack.split(',').map(t => (
                  <span key={t} className="tech-chip">{t.trim()}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
