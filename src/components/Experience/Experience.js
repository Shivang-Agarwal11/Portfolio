import React from 'react';
import { data } from '../../data';

const Experience = () => {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <p className="section-label">work history</p>
        <h2 className="section-heading">Experience</h2>
        <div className="exp-timeline">
          {data.experience.map((exp, i) => (
            <div key={i} className="exp-item">
              <div className="exp-card">
                <div className="exp-card-top">
                  <div>
                    <div className="exp-role">{exp.role}</div>
                    <div className="exp-company-loc">{exp.company} &middot; {exp.location}</div>
                  </div>
                  <span className="exp-date">{exp.date}</span>
                </div>
                <ul className="exp-points">
                  {exp.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
