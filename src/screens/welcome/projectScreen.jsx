// ProjectsScreen.js
import React, { useState } from 'react';
import Project from "../../components/project";
import BasicMenu from '../../components/menu';

const ProjectsScreen = ({handlePageChange, handleMenuClicked}) => {
    const [selectedProject, setSelectedProject] = useState(null);


    const handlePage = (page) => {
        handlePageChange(page);
      }

  const projects = [
    {
      title: 'Notes App',
      imageUrl: 'path-to-image-1.jpg',
      description: 'Description for Project 1',
    },
    {
      title: 'Project 2',
      imageUrl: 'path-to-image-2.jpg',
      description: 'Description for Project 2',
    },
    {
      title: 'Project 3',
      imageUrl: 'path-to-image-3.jpg',
      description: 'Description for Project 3',
    },
    {
      title: 'Project 4',
      imageUrl: 'path-to-image-4.jpg',
      description: 'Description for Project 4',
    },
    {
        title: 'Project 5',
        imageUrl: 'path-to-image-3.jpg',
        description: 'Description for Project 3',
      },
      {
        title: 'Project 6',
        imageUrl: 'path-to-image-4.jpg',
        description: 'Description for Project 4',
      },
      {
        title: 'Project 7',
        imageUrl: 'path-to-image-3.jpg',
        description: 'Description for Project 3',
      },
      {
        title: 'Project 8',
        imageUrl: 'path-to-image-4.jpg',
        description: 'Description for Project 4',
      },
  ];

  const handleProjectClick = (index) => {
    setSelectedProject(index);
  };

  const handleCloseExpandedView = () => {
    setSelectedProject(null);
  };

  return (
    <div>
        <BasicMenu handlePage={handlePage} handleMenuClicked={false}/>
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} onClick={() => handleProjectClick(index)}>
          <Project {...project} />
        </div>
      ))}
      {selectedProject !== null && (
        <div className="project-expanded-view">
          <button className="close-button" onClick={handleCloseExpandedView}>
            Close
          </button>
          <Project {...projects[selectedProject]} />
          {/* Add additional information or components here for the expanded view */}
        </div>
      )}
    </div>
    </div>

  );
};

export default ProjectsScreen;
