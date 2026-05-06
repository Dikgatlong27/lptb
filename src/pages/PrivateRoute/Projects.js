// src/pages/Projects.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <p>Your list of projects will go here.</p>
      <button onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
    </div>
  );
};

export default Projects;
