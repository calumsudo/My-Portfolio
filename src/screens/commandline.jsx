import React, { useState, useEffect, useRef } from 'react';
import ProjectsScreen from './welcome/projectScreen';
import ResumeScreen from './welcome/resumeScreen';

const CommandLine = () => {
    const [commandHistory, setCommandHistory] = useState([]);
    const [currentCommand, setCurrentCommand] = useState('');
    const [openProject, setOpenProject] = useState(false);
    const [openResume, setOpenResume] = useState(false);

  const inputRef = useRef(null);
  
  const handleInputChange = (event) => {
    setCurrentCommand(event.target.value);
  };
  const handleEnterKeyPress = (event) => {
    if (event.key === 'Enter') {
      // Process the command when the user presses Enter
      processCommand();
    }
  };

  useEffect(() => {
    // Focus on the input element when the component mounts
    inputRef.current.focus();
  }, []);

  const processCommand = () => {
    // Process the currentCommand and generate the response
    // You can use a switch statement or any other method to handle different commands
    let response = '';

    switch(currentCommand){
        case "ls":
            response = "Projects Resume About_Me Game";
            setOpenProject(false);
            setOpenResume(false);
            break;
        case "cd Projects":
            setOpenProject(true);
            setCurrentCommand('');
            setOpenResume(false);
            return;
        case "cd Resume":
            setCurrentCommand('');
            setOpenResume(true);
            return;
        case "cd About_Me":
            break;
        case "cd Game":
            break;
        case "clear":
            setCommandHistory([]);
            setCurrentCommand('');
            setOpenProject(false);
            setOpenResume(false);
            return;
        case "man":
            response = "Commands: ls, cd {directory}, man, and clear.\n ls: shows a list of items in current directory. \n cd: followed by the name of the directory you want to enter changes the directory \n clear: clears the terminal of all command history";
            break;
        default:
            response = `Unknown Command ${currentCommand}`
    }
    // Save the current command and response to the history
    setCommandHistory((prevHistory) => [...prevHistory, { command: currentCommand, response }]);

    // Clear the input field for the next command
    setCurrentCommand('');
  };

  return (
    <div className="command-line" onClick={e=> {inputRef.current.focus();}}>
      {commandHistory.map((entry, index) => (
        <div key={index}>
          <span className="terminal-entry">Happy-Recruiter-Computer:Calum_Portfolio$ {entry.command}</span>
          <br />
          <span className="terminal-error">{entry.response}</span>
        </div>
      ))}
      {openProject && <ProjectsScreen />}
      {openResume && <ResumeScreen />}
        <div className="blinking-cursor-container">
          <p className="terminal-entry">Happy-Recruiter-Computer:Calum_Portfolio$</p>
          <span className="user-input">{currentCommand}</span>
          <input
            type="text"
            style={{ width: '10px', minWidth: '10px', caretColor: 'transparent', opacity: 0 }}
            onChange={handleInputChange}
            onKeyPress={handleEnterKeyPress}
            value={currentCommand}
            ref={inputRef}
          />
          <span className="blinking-cursor" />
        </div>
    </div>
  );
};

export default CommandLine;
