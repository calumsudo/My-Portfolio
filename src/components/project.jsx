// Project.js
import React from 'react';

const Project = ({ imageUrl, title, description }) => {
  return (
    <div className="project">
      <img src={imageUrl} alt={title} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
    </div>
  );
};

export default Project;
