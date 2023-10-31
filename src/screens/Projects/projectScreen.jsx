// ProjectsScreen.js
import React from 'react'
import { Grid, useMediaQuery } from '@mui/material'
import Project from '../../components/ProjectCard/project'
import nws from '../../assets/ProjectImages/NotesWelcomeScreen.png'
import gpt from '../../assets/ProjectImages/GPT.png'
import bartender from '../../assets/ProjectImages/Bartender.png'
import os from '../../assets/ProjectImages/OperatingSystem.png'
import punkin from '../../assets/ProjectImages/Punkin.png'
import BlackJack from '../../assets/ProjectImages/BlackJack.jpg'
import Breese from '../../assets/ProjectImages/Breese.png'
import Plot from '../../assets/ProjectImages/Plotting.png'
import BinaryClock from '../../assets/ProjectImages/BinaryClock.jpg'
import HashMap from '../../assets/ProjectImages/HashMap.jpg'
import DLL from '../../assets/ProjectImages/DLL.png'
import Calculator from '../../assets/ProjectImages/Calculator.png'
import BunkerWire from '../../assets/ProjectImages/BunkerWire.png'
import './projectScreen.scss'
const ProjectsScreen = () => {
  const projects = [
    {
      title: 'Notes App',
      imageUrl: nws,
      description:
        'Introducing my cloud-based note storage web application—a sleek and efficient solution for organizing your notes effortlessly. Leveraging Firebase cloud functions, this app boasts seamless server-side routing, a reliable database, and secure Google authentication for an enhanced user experience. To create the user-friendly and intuitive front-end interface, I harnessed the power of the React Library, ensuring a smooth and engaging user interaction. This combination of cutting-edge technologies allows users to effortlessly store and access their notes on the cloud, providing a seamless and reliable solution for all note-taking needs. With a focus on simplicity and functionality, this project demonstrates my expertise in web development and my ability to create efficient, modern, and secure applications.',
      github: 'https://github.com/calumsudo/notes-app',
      weblink: 'https://notes-app-c5a88.web.app/',
      liveDemo: true,
    },
    {
      title: 'GPT Clone',
      imageUrl: gpt,
      description:
        'In this project, I skillfully developed a replica User Interface inspired by ChatGPT. This remarkable undertaking harnesses the remarkable capabilities of the GPT-3.5 model through an API key. By leveraging the power of React Library for the frontend and Node.js for the backend, I have seamlessly brought this project to life. To explore and experience this innovative application firsthand, you can utilize your very own API key by downloading the source code and running it locally. This hands-on approach offers a unique opportunity to interact with the advanced AI model and witness the seamless fusion of front-end and back-end technologies.',
      github: 'https://github.com/calumsudo/chat-gpt-clone',
    },
    {
      title: 'Bartender',
      imageUrl: bartender,
      description:
        'A freelance Bartending webapp made with React that connects bartenders with events. Currently still in development, this one is my favorite project by far so please ask me about it!',
      github: 'https://github.com/calumsudo/notes-app',
    },
    {
      title: 'Bunker Wire',
      imageUrl: BunkerWire,
      description:
        'A job software I wrote for the Ship Brokerage Company SPI marine, this python application which I packaged for Mac and Windows allows a user to upload the daily Bunker Pricing Report PDF into a GUI. The software then finds the relevant data and will append it to a selected Excel spreadsheet',
      github: 'https://github.com/calumsudo/bunkerwire',
    },
    {
      title: 'Breese Architects',
      imageUrl: Breese,
      description: 'Designed Breese Architects new website, summer 2023.',
    },
    {
      title: 'Plotting',
      imageUrl: Plot,
      description:
        'Geographically plots world map based on world energy consumption using pandas, plotly, and python. The program plots things such as the GDP per country on the map, a scatter plot showing oil change percentage, and a bar plot depicting coal production change percentage.',
      github: 'https://github.com/calumsudo/Geographical-Plotting',
    },
    {
      title: 'Python Physics Game',
      imageUrl: punkin,
      description:
        'Python GUI game that uses Physics. A pumpkin is spawned in at a random height and a target is placed at a random distance away. Choose the angle and velocity at which you wish to launch the pumpkin, if you hit the target you win.',
      github: 'https://github.com/calumsudo/PunkinChunkin',
    },
    {
      title: 'Operating System',
      imageUrl: os,
      description:
        'Scheduling prpgram written in C that schedules jobs based on either shortest job first or first in first out.',
      github: 'https://github.com/caadams4/OS-Final-Proj',
    },
    {
      title: 'Binary Clock',
      imageUrl: BinaryClock,
      description:
        'Built on a Raspberry Pi with a sense hat a real time Binary Clock with LEDs',
      github: 'https://github.com/calumsudo/raspberry_pi_binary_clock',
    },
    {
      title: 'Black Jack',
      imageUrl: BlackJack,
      description: 'Simple Black Jack game against a dealer in C',
      github: 'https://github.com/calumsudo/BlackJack',
    },
    {
      title: 'DLL Music Playlist',
      imageUrl: DLL,
      description:
        'This was a very fun project made in C++ which uses Doubly Linked Lists to create playlists for music where it can be sorted by Artist, Name, or even song length. Unfortunately, I have lost the code for this project.',
    },
    {
      title: 'Hashmap Author',
      imageUrl: HashMap,
      description:
        'In this C++ program upload a txt file of a chapter of your favorite author and the program will use Hash Maps and collision functions to make a new txt output file that aims to mimic the voice of that author.',
      github: 'https://github.com/calumsudo/HashMap-Author-Voice',
    },
    {
      title: 'VHDL Calculator',
      imageUrl: Calculator,
      description:
        'Single Cycle Calculator made using VHDL, includes an ALU, REG, MUX, DEMUX, and more',
      github: 'https://github.com/calumsudo/calandev',
    },
  ]

  const isBreakpoint1087px = useMediaQuery('(max-width:1087px)')
  const isBreakpoint1590px = useMediaQuery('(max-width:1590px)')

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
  )
}

export default ProjectsScreen
