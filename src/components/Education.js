import React from 'react';
import { data } from '../data';

const Education = () => {
  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <p className="section-label">background</p>
        <h2 className="section-heading">Education &amp; Achievements</h2>

        <div style={{ maxWidth: '780px' }}>
          {data.education.map((edu, i) => (
            <div key={i} className="edu-card">
              <div>
                <div className="edu-institution">{edu.institution}</div>
                <div className="edu-degree">{edu.degree}</div>
                <div className="edu-detail">{edu.details}</div>
              </div>
              <span className="edu-date">{edu.date}</span>
            </div>
          ))}

          <div className="achievements-grid">
            {data.achievements.map((item, i) => (
              <div key={i} className="achievement-item">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
