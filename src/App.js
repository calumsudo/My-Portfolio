import React, { useState } from 'react';
import Layout from './components/Layout/Layout';
import Terminal from './screens/terminal';
import CommandLine from './screens/commandline';
import ProjectsScreen from './screens/Projects/projectScreen';
import ResumeScreen from './screens/Resume/resumeScreen';
import AboutMe from './screens/About/aboutMe';
import WelcomePage from './screens/Welcome/welcomeScreen';
import { Route, Routes } from 'react-router';
import Contact from './screens/Contact/contact';

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

  const handleExit = () => {
    setCurrentScreen('welcome');
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <div className='home-page'>
            {currentScreen === 'welcome' && <div className='home-page'><WelcomePage handleButtonClick={handleButtonClick} /></div>}
            {currentScreen === 'terminal' && <Terminal handleClear={handleClear} handlePageChange={handlePageChange}/>}
            {currentScreen === 'command-line' && <CommandLine handleExit={handleExit}/>}
            </div> 
          }/>
          <Route path="about" element={<AboutMe />}/>
          <Route path="resume" element={<ResumeScreen />} />
          <Route path="projects" element={<ProjectsScreen />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
