// src/components/Portfolio.js
import React, { useState } from 'react';

const projects = [
  { id: 1, name: 'To-do List', image: '/images/to-do-list.png' },
  { id: 2, name: 'Weather App', image: '/images/weather.png' },
  { id: 3, name: 'Tic Tac Toe', image: '/images/tic-tac-toe.png' }
];

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);

  const handleMouseEnter = (id) => {
    setActiveProject(id);
  };

  const handleMouseLeave = () => {
    setActiveProject(null);
  };

  return (
    <div id="portfolio">
      <h1>My Portfolio</h1>
      <div className="project-container">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={project.image} alt={project.name} className="project-image" />
            {activeProject === project.id && (
              <div className='project-name'>
                <p>{project.name}</p>
                </div>
              )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

