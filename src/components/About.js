// src/About.js
import React from "react";

const About = () => {
  return (
    <div className="about container" id="about">
      <h1>About</h1>
      <p>
        I’m a software developer in SAP, where I work with clients to build
        customized solutions that help their businesses succeed and serve the
        public. I’m passionate about delivering products that meet customer
        needs and make a real impact. I have a strong interest in AI, ML, data
        science, and data analytics. These fields excite me, and I’m always
        looking for ways to integrate them into my work. When I’m not developing
        software, you’ll find me exploring new ideas, dancing, or binge-watching
        my favorite shows. I’m a tech enthusiast at heart, always eager to learn
        and solve problems.
      </p>
      <div className="skills-grid">
        <div className="skill-item">
          <img src={require("../assets/python.png")} alt="Python" />
          <p>Python</p>
        </div>
        <div className="skill-item">
          <img src={require("../assets/java.png")} alt="Java" />
          <p>Java</p>
        </div>
        <div className="skill-item">
          <img src={require("../assets/mongodb.jpeg")} alt="MongoDB" />
          <p>MongoDB</p>
        </div>
        <div className="skill-item">
          <img src={require("../assets/nodejs.png")} alt="Node.js" />
          <p>Node.Js</p>
        </div>
        <div className="skill-item">
          <img src={require("../assets/html.png")} alt="HTML & CSS" />
          <p>HTML & CSS</p>
        </div>
        <div className="skill-item">
          <img src={require("../assets/AI.jpeg")} alt="AI" />
          <p>AI</p>
        </div>
        {/* Add other skill items similarly */}
      </div>
    </div>
  );
};

export default About;
