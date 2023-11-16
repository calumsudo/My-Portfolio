import React, { useEffect, useState, useMemo } from 'react';
import { Grid, useMediaQuery } from '@mui/material';
import Project from '../../components/ProjectCard/project';
import axios from 'axios';
import './projectScreen.scss';

const ProjectsScreen = () => {
  const [projects, setProjects] = useState([]);

  const privateProjects = useMemo(() =>[
    {
      title: 'Bartender',
      imageUrl: 'https://github.com/calumsudo/My-Portfolio/blob/master/src/assets/ProjectImages/Bartender.png?raw=true',
      description: 'A freelance Bartending webapp made with React that connects bartenders with events. Currently still in development, this one is my favorite project by far so please ask me about it!',
      weblink: 'https://drive.google.com/file/d/1_J45rvlvBd5Qp_mYK2njM9c7psKM1hQm/view'
    },
    {
      title: 'Breese Architects',
      imageUrl: 'https://github.com/calumsudo/My-Portfolio/blob/master/src/assets/ProjectImages/Breese.png?raw=true',
      description: 'Designed Breese Architects new website, summer 2023.',
    },
    {
      title: 'Operating System',
      imageUrl: 'https://github.com/calumsudo/My-Portfolio/blob/master/src/assets/ProjectImages/OperatingSystem.png?raw=true',
      description:
        'Scheduling program written in C that schedules jobs based on either shortest job first or first in first out.',
      github: 'https://github.com/caadams4/OS-Final-Proj',
    },
    {
      title: 'DLL Music Playlist',
      imageUrl: 'https://github.com/calumsudo/My-Portfolio/blob/master/src/assets/ProjectImages/DLL.png?raw=true',
      description:
        'This was a very fun project made in C++ which uses Doubly Linked Lists to create playlists for music where it can be sorted by Artist, Name, or even song length. Unfortunately, I have lost the code for this project.',
    }
  ], []);

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
        setProjects([...privateProjects, ...fetchedProjects]);
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, [privateProjects]);

  const getProjectImageName = (projectName) => {
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
