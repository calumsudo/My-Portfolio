import React, { useState } from 'react';
import Terminal from './screens/terminal';
import CommandLine from './screens/commandline';
import ProjectsScreen from './screens/welcome/projectScreen';
import ResumeScreen from './screens/welcome/resumeScreen';
import Resume from './screens/resume';
import AboutMe from './screens/aboutMe';
import Game from './screens/game';
import WelcomePage from './screens/welcome/welcomeScreen';
import BasicMenu from './components/menu';
const App = () => {
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

  console.log(currentScreen);

  return (
    <div>
      {currentScreen === 'welcome' && <div><WelcomePage handleButtonClick={handleButtonClick} /> <ProjectsScreen /> <ResumeScreen /> </div>}
      {currentScreen === 'terminal' && <Terminal handleClear={handleClear} handlePageChange={handlePageChange}/>}
      {currentScreen === 'command-line' && <CommandLine />}
      {currentScreen === 'Projects' && <ProjectsScreen handlePageChange={handlePageChange}/>}
      {currentScreen === 'Resume' && <Resume handlePageChange={handlePageChange}/>}
      {currentScreen === 'About Me' && <AboutMe handlePageChange={handlePageChange}/>}
      {currentScreen === 'Game' && <Game handlePageChange={handlePageChange}/>}
      

    </div>
  );
};

export default App;
