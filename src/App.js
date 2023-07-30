import React, { useState } from 'react';
import Layout from './components/Layout';
import Terminal from './screens/terminal';
import CommandLine from './screens/commandline';
import ProjectsScreen from './screens/welcome/projectScreen';
import ResumeScreen from './screens/welcome/resumeScreen';
import AboutMe from './screens/aboutMe';
import Game from './screens/game';
import WelcomePage from './screens/welcome/welcomeScreen';
import { Route, Routes } from 'react-router';

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />}/>
          <Route path="about" element={<AboutMe />}/>
          <Route path="resume" element={<ResumeScreen />} />
          <Route path="projects" element={<ProjectsScreen />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
