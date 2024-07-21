// src/components/Resume.js
import React from 'react';

const Resume = () => {
  return (
    <div id="resume">
      <h2>Experience</h2>
      <div className="experience-container">
        <div className="box">
          <h4>Tech Mahindra</h4>
          <p>Associate Software Engineer</p>
        </div>
        <div className="box">
          <h4>Chegg</h4>
          <p>Freelancer</p>
        </div>
      </div>
      
      <h2>Education</h2>
      <div className="education-container">
        <div className="box">
          <h4>BTech</h4>
          <p>Sri Venkateswara College of Engineering, 79%</p>
        </div>
        <div className="box">
          <h4>Intermediate</h4>
          <p>Narayana Junior College, 99.2%</p>
        </div>
        <div className="box">
          <h4>Schooling</h4>
          <p>Sri Chaitanya Public School, 100%</p>
        </div>
      </div>
    </div>
  );
};

export default Resume;

