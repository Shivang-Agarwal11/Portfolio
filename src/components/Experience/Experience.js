// src/Timeline.js
import React, { useEffect, useRef } from "react";
import './Experience.css';

const Experience = () => {
  const experiences = [
    { timeline: 'Jun 2024 - Present', year: '2024', title: 'Java and Python Developer in IPR', company: 'SAP', description: 'I’m working as a Java (CAP) and Python developer in the Intelligence Product Recommendation Team(IPR) , where team’s focus is on recommending products and their configurations within the automotive industry. Currently, I’m dedicated to developing a multi-target regression model using TensorFlow to enhance the precision and effectiveness of our recommendations.' },
    { timeline: 'Sep 2023 - Apr 2024', year: '2023', title: 'Software Developer in JIT', company: 'SAP', description: 'I worked as a full stack developer in the Just In Time (JIT) team, which specializes in inventory management for the automotive industry. In this role, I utilized UI5 for the frontend and ABAP for the backend, ensuring seamless integration and functionality. During my time on the team, I had the opportunity to collaborate with customers like BMW. I successfully delivered a UI5-based application that was tailored to meet their specific requirements' },
    { timeline: 'Aug 2023 - Present', year: '2023', title: 'Scholar@SAP', company: 'SAP', description: 'I joined SAP as a Scholar, a role designed to nurture early talents by providing real-world development experience by working in different teams alongside a work-integrated learning program. This unique opportunity allows me to pursue a master’s degree from BITS Pilani while contributing to innovative projects and teams at SAP.' },
    { timeline: 'Mar 2023 - Jul 2023', year: '2023', title: 'Intern | DevOps Trainee', company: 'Nagarro', description: 'I worked as a DevOps Engineer, where I gained extensive experience with a range of DevOps tools, including Jenkins, Terraform, Ansible, and JFrog. In this role, I managed and delivered pipelines within cloud environments such as Azure and AWS. I was responsible for configuring and optimizing these pipelines to ensure efficient and reliable deployment processes.' },
  ];

  const timelineItemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.1 });

    timelineItemsRef.current.forEach(item => observer.observe(item));

    return () => {
      timelineItemsRef.current.forEach(item => observer.unobserve(item));
    };
  }, []);

  return (
    <div className="portfolio container" id="experience">
      <h1>Experience</h1>
      <div className="timeline">
        {experiences.map((item, index) => (
          <div className="timeline-item" key={index} ref={el => timelineItemsRef.current[index] = el}>
            <div className="timeline-dot"></div>
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <h4>{item.company}</h4>
              <div className="timeline-duration">{item.timeline}</div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
