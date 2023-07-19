import React, { useState } from 'react';
import WelcomePage from './screens/welcome';
import Terminal from './screens/terminal';
import CommandLine from './screens/commandline';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('command-line');

  const handleButtonClick = () => {
    setCurrentScreen('terminal');
  };
  const handleClear = () => {
    setCurrentScreen('command-line');
  }

  console.log(currentScreen);

  return (
    <>
      {currentScreen === 'welcome' && <WelcomePage handleButtonClick={handleButtonClick} />}
      {currentScreen === 'terminal' && <Terminal handleClear={handleClear}/>}
      {currentScreen === 'command-line' && <CommandLine />}
    </>
  );
};

export default App;
