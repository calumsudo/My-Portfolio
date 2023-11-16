import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';

const TerminalProjects = ({ selectedProjectTitle }) => {
  const [projects, setProjects] = useState([]);

  const privateProjects = useMemo(() => [
    {
      title: 'Bartender',
      description: 'A freelance Bartending webapp made with React that connects bartenders with events. Currently still in development, this one is my favorite project by far so please ask me about it!',
      weblink: 'https://drive.google.com/file/d/1_J45rvlvBd5Qp_mYK2njM9c7psKM1hQm/view',
    },
    {
      title: 'Breese Architects',
      description: 'Designed Breese Architects new website, summer 2023.',
    },
    {
      title: 'Operating System',
      description: 'Scheduling program written in C that schedules jobs based on either shortest job first or first in first out.',
      github: 'https://github.com/caadams4/OS-Final-Proj',
    },
    {
      title: 'DLL Music Playlist',
      description: 'This was a very fun project made in C++ which uses Doubly Linked Lists to create playlists for music where it can be sorted by Artist, Name, or even song length. Unfortunately, I have lost the code for this project.',
    },
  ], []);

  useEffect(() => {
    axios.get('https://api.github.com/users/calumsudo/repos')
      .then(response => {
        const fetchedProjects = response.data.map(repo => ({
          title: repo.name,
          description: repo.description,
          github: repo.html_url,
          weblink: repo.homepage,
          liveDemo: !!repo.homepage,
        }));
        setProjects([...privateProjects, ...fetchedProjects]);
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, [privateProjects]);

  const selectedProject = useMemo(() => {
    return projects.find(project => project.title === selectedProjectTitle);
  }, [projects, selectedProjectTitle]);

  if (!selectedProject) {
    return <div>Project not found</div>;
  }
  return (
<div style={{ padding: '0 20px' }}> {/* This adds padding on the left and right */}
  <h3 style={{ marginBottom: '10px' }}>{selectedProject.title}</h3> {/* This adds space below the title */}
  <p style={{ marginBottom: '10px' }}>{selectedProject.description}</p> {/* This adds space below the description */}
  <div> {/* This div wraps the links to control their layout */}
    {selectedProject.weblink && (
      <a href={selectedProject.weblink} style={{ marginRight: '10px' }}> {/* This adds space to the right of the website link */}
        Website
      </a>
    )}
    {selectedProject.github && (
      <a href={selectedProject.github}>
        Source Code
      </a>
    )}
  </div>
</div>

  );
}

export default TerminalProjects;
