import React, { useState } from 'react'
import Layout from './components/Layout/Layout'
import Terminal from './screens/Terminal/terminal'
import CommandLine from './screens/Terminal/commandline'
import ProjectsScreen from './screens/Projects/projectScreen'
import Resume from './screens/Resume/resume'
import Home from './screens/Home/Home'
import WelcomePage from './screens/Terminal/welcomeScreen'
import { Route, Routes } from 'react-router'
import Contact from './screens/Contact/contact'
import About from './screens/About/about'
import ErrPage from './components/404/404Page'

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('welcome')

  const handleButtonClick = () => {
    setCurrentScreen('terminal')
  }
  
  const handleClear = () => {
    setCurrentScreen('command-line')
  }

  const handlePageChange = (handlePageChange) => {
    setCurrentScreen(handlePageChange)
  }

  const handleExit = () => {
    setCurrentScreen('welcome')
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="resume" element={<Resume />} />
          <Route path="projects" element={<ProjectsScreen />} />
          <Route
            path="terminal-simulator"
            element={
              <div className="home-page">
                {currentScreen === 'welcome' && (
                  <div className="home-page">
                    <WelcomePage handleButtonClick={handleButtonClick} />
                  </div>
                )}
                {currentScreen === 'terminal' && (
                  <Terminal
                    handleClear={handleClear}
                    handlePageChange={handlePageChange}
                  />
                )}
                {currentScreen === 'command-line' && (
                  <CommandLine handleExit={handleExit} />
                )}
              </div>
            }
          />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<ErrPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
