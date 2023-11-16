import React, { useEffect, useState, useMemo } from 'react';
import { Box, Grid } from '@mui/material';
import axios from 'axios';
import './TerminalProjects.scss';

const TerminalProjects = () => {
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
        const fetchedProjects = response.data.map(repo => ({
          title: repo.name,
          imageUrl: `https://github.com/calumsudo/My-Portfolio/blob/master/src/assets/ProjectImages/${getProjectImageName(repo.name)}?raw=true`,
          description: repo.description,
          github: repo.html_url,
          weblink: repo.homepage,
          liveDemo: repo.homepage
        }));
        setProjects([...privateProjects, ...fetchedProjects]);
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, [privateProjects]);

  const getProjectImageName = (projectName) => {
    const imageName = projectName.replace(/\s+/g, '') + '.png';
    return imageName;
  };

  return (
    <div>
      {projects.map((project, index) => (
        <ProjectBox
          key={index}
          title={project.title}
          img={project.imageUrl}
          description={project.description}
          weblink={project.weblink}
          github={project.github}
        />
      ))}
    </div>
  );
}

const ProjectBox = ({ title, img, description, weblink, github }) => {
  return (
    <Box
      sx={{
        margin: '50px',
        backgroundColor: '#ffff',
        height: 'auto',
        width: '90%',
        cursor: 'auto',
        borderRadius: '8px',
        padding: '20px',
      }}
    >
      <Grid container spacing={2}>
        {/* ... rest of the ProjectBox component */}
      </Grid>
    </Box>
  )
}

export default TerminalProjects;
