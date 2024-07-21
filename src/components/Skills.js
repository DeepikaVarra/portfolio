// src/components/Skills.js
import React from 'react';

const Skills = () => {
  return (
    <div id="skills">
      <section className="skills-section" id="frontend">
        <h2>Frontend</h2>
        <div className="skill-box">
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>React</p>
        </div>
      </section>
      <section className="skills-section" id="backend">
        <h2>Backend</h2>
        <div className="skill-box">
          <p>C</p>
          <p>Python</p>
        </div>
      </section>
      <section className="skills-section" id="database">
        <h2>Database</h2>
        <div className="skill-box">
          <p>SQL</p>
        </div>
      </section>
    </div>
  );
};

export default Skills;

