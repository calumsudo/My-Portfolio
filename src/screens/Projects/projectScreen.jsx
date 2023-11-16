import React, { useEffect, useState } from 'react';
import { Grid, useMediaQuery } from '@mui/material';
import Project from '../../components/ProjectCard/project';
import axios from 'axios';
import './projectScreen.scss';

const ProjectsScreen = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/users/calumsudo/repos')
      .then(response => {
        const fetchedProjects = response.data.map(repo => {
          const imageName = getProjectImageName(repo.name);
          return {
            title: repo.name,
            imageUrl: `https://github.com/calumsudo/My-Portfolio/blob/master/src/assets/ProjectImages/${imageName}?raw=true`,
            description: repo.description,
            github: repo.html_url,
            weblink: repo.homepage,
            liveDemo: repo.homepage
          };
        });
        setProjects(fetchedProjects);
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  const getProjectImageName = (projectName) => {
    // Logic to map the project name to the corresponding image name
    // For example, if project name is 'Notes App', image name might be 'NotesApp.png'
    // Adjust the logic based on your naming convention
    const imageName = projectName.replace(/\s+/g, '') + '.png';
    return imageName;
  };

  const isBreakpoint1087px = useMediaQuery('(max-width:1087px)');
  const isBreakpoint1590px = useMediaQuery('(max-width:1590px)');

  return (
    <div className="project-screen">
      <h1 className="project-screen-title">PROJECTS</h1>
      <div className="projects-container">
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={isBreakpoint1590px ? 6 : 4}
              sx={{
                minWidth: isBreakpoint1087px ? '100%' : '300px',
                maxWidth: isBreakpoint1087px ? '100%' : '400px',
              }}
            >
              <Project {...project} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default ProjectsScreen;
