import './index.scss';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar';
import WelcomePage from '../../screens/welcome/welcomeScreen';
import Terminal from '../../screens/terminal';
import CommandLine from '../../screens/commandline';
import ProjectsScreen from '../../screens/welcome/projectScreen';
import ResumeScreen from '../../screens/welcome/resumeScreen';
import AboutMe from '../../screens/aboutMe';
import Game from '../../screens/game';
const Layout = () => {
      const [currentScreen, setCurrentScreen] = useState('welcome');

  const handleButtonClick = () => {
    setCurrentScreen('terminal');
  };
  const handleClear = () => {
    setCurrentScreen('command-line');
  }

  const handlePageChange = (handlePageChange) => {
    setCurrentScreen(handlePageChange);
  }

  //TODO: Add Scroll Button on Welcome Page so users know they can just scroll down
    return(
      <div>
        <Sidebar />
        <Outlet />
      </div>
    );
}

export default Layout


//    <div className='home-page'>
// {currentScreen === 'welcome' && <div className='home-page'><WelcomePage handleButtonClick={handleButtonClick} /> <ProjectsScreen /> <ResumeScreen /> <AboutMe /></div>}
// {currentScreen === 'terminal' && <Terminal handleClear={handleClear} handlePageChange={handlePageChange}/>}
// {currentScreen === 'command-line' && <CommandLine />}
// {currentScreen === 'Projects' && <ProjectsScreen handlePageChange={handlePageChange}/>}
// {currentScreen === 'Resume' && <Resume handlePageChange={handlePageChange}/>}
// {currentScreen === 'About Me' && <AboutMe handlePageChange={handlePageChange}/>}
// {currentScreen === 'Game' && <Game handlePageChange={handlePageChange}/>}
// </div> 