// ProjectsScreen.js
import React from 'react';
import { Grid, useMediaQuery } from '@mui/material';
import Project from "../../components/project";
import nws from "../../assets/Notes/NotesWelcomeScreen.png";
import gpt from "../../assets/GPT/GPT.png";
import bartender from "../../assets/Bartender/Bartender.png"
import os from "../../assets/OperatingSystem/OperatingSystem.png"
import punkin from "../../assets/PunkinChunkin/Punkin.png"
import BlackJack from "../../assets/BlackJack/BlackJack.jpg"
import Breese from "../../assets/Breese.png"
import Plot from "../../assets/Plotting.png"
const ProjectsScreen = () => {
  const projects = [
    {
      title: 'Notes App',
      imageUrl: nws,
      description: 'Introducing my cloud-based note storage web application—a sleek and efficient solution for organizing your notes effortlessly. Leveraging Firebase cloud functions, this app boasts seamless server-side routing, a reliable database, and secure Google authentication for an enhanced user experience. To create the user-friendly and intuitive front-end interface, I harnessed the power of the React Library, ensuring a smooth and engaging user interaction. This combination of cutting-edge technologies allows users to effortlessly store and access their notes on the cloud, providing a seamless and reliable solution for all note-taking needs. With a focus on simplicity and functionality, this project demonstrates my expertise in web development and my ability to create efficient, modern, and secure applications.',
      github: 'https://github.com/calumsudo/notes-app',
      weblink: 'https://notes-app-c5a88.web.app/',
      liveDemo: true,
    },
    {
      title: 'GPT Clone',
      imageUrl: gpt,
      description: 'In this project, I skillfully developed a replica User Interface inspired by the renowned ChatGPT, a groundbreaking creation by OpenAI. This remarkable undertaking harnesses the remarkable capabilities of the GPT-3.5 model through an API key. By leveraging the power of React Library for the frontend and Node.js for the backend, I have seamlessly brought this project to life. To explore and experience this innovative application firsthand, you can utilize your very own API key by downloading the source code and running it locally. This hands-on approach offers a unique opportunity to interact with the advanced AI model and witness the seamless fusion of front-end and back-end technologies.',
      github: 'https://github.com/calumsudo/chat-gpt-clone',
    },
    {
      title: 'Bartender',
      imageUrl: bartender,
      description: 'Description for Project 3',
      github: 'https://github.com/calumsudo/notes-app',
    },
    {
      title: 'Breese Architects',
      imageUrl: Breese,
      description: 'Designed their new website, summer 2023.',
    },
    {
      title: 'Plotting',
      imageUrl: Plot,
      description: 'Geographically plots world map based on world energy consumption using pandas, plotly, and python. The program plots things such as the GDP per country on the map, a scatter plot showing oil change percentage, and a bar plot depicting coal production change percentage.',
      github: 'https://github.com/calumsudo/Geographical-Plotting',
    
    },
    {
      title: 'Python Physics Game',
      imageUrl: punkin,
      description: 'Description for Project 4',
      github: 'https://github.com/calumsudo/PunkinChunkin',
    },
    {
      title: 'Operating System',
      imageUrl: os,
      description: 'Description for Project 3',
      github: 'https://github.com/caadams4/OS-Final-Proj',
    },
    {
        title: 'Binary Clock',
        imageUrl: 'path-to-image-3.jpg',
        description: 'Description for Project 3',
        github: 'https://github.com/calumsudo/notes-app',
      },
      {
        title: 'Black Jack',
        imageUrl: BlackJack,
        description: 'Description for Project 4',
        github: 'https://github.com/calumsudo/BlackJack',
      },
      {
        title: 'DLL Music Playlist',
        imageUrl: 'path-to-image-3.jpg',
        description: 'Description for Project 3',
        github: 'https://github.com/calumsudo/notes-app',
      },
      {
        title: 'Hashmap Author',
        imageUrl: 'path-to-image-4.jpg',
        description: 'Description for Project 4',
        github: 'https://github.com/calumsudo/notes-app',
      },
  ];


  const isBreakpoint1087px = useMediaQuery('(max-width:1087px)');
  const isBreakpoint1590px = useMediaQuery('(max-width:1590px)');

  return (
    <div className="project-screen">
      <h2 className="project-screen-title">PROJECTS</h2>
      <div className="projects-container">
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={isBreakpoint1590px ? 6 : 4} sx={{
              minWidth: isBreakpoint1087px ? '100%' : '300px',
              maxWidth: isBreakpoint1087px ? '100%' : '400px',
            }}>
              <Project {...project} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default ProjectsScreen;
