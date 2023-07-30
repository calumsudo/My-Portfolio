import React, { useState, useEffect, useRef } from 'react'
import TerminalProjects from './TerminalProjects/TerminalProjects'
import { projects } from '../screens/TerminalProjects/TerminalProjects'

const CommandLine = ({ handleExit }) => {
  const [commandHistory, setCommandHistory] = useState([])
  const [currentCommand, setCurrentCommand] = useState('')
  const [directory, setDirectory] = useState(
    'Happy-Recruiter-Computer:Calum_Portfolio$'
  )
  const commandLineRef = useRef(null)
  const inputRef = useRef(null)

  const handleInputChange = (event) => {
    setCurrentCommand(event.target.value)
  }
  const handleEnterKeyPress = (event) => {
    if (event.key === 'Enter') {
      // Process the command when the user presses Enter
      processCommand()
    }
  }

  useEffect(() => {
    // Focus on the input element when the component mounts
    inputRef.current.focus()
  }, [])

  useEffect(() => {
    document.body.classList.add('hide-navbar')
    return () => {
      document.body.classList.remove('hide-navbar')
    }
  }, [])
  const processCommand = () => {
    // Process the currentCommand and generate the response
    // You can use a switch statement or any other method to handle different commands
    let response = ''

    if (directory === 'Happy-Recruiter-Computer:Calum_Portfolio$') {
      switch (currentCommand) {
        case 'ls':
          response =
            'Projects\u00A0\u00A0\u00A0\u00A0Resume\u00A0\u00A0\u00A0\u00A0About_Me'
          break
        case 'cd':
          setDirectory('Happy-Recruiter-Computer:Calum_Portfolio$')
          break
        case 'cd Projects':
          setDirectory('Happy-Recruiter-Computer:Calum_Portfolio/Projects$')
          break
        case 'cd Resume':
          break
        case 'cd About_Me':
          break
        case 'clear':
          setCommandHistory([])
          setCurrentCommand('')
          return
        case 'man':
          response = `Commands: ls, cd {directory}, man, and clear.
            ls: shows a list of items in the current directory.
            cd: followed by the name of the directory you want to enter changes the directory.
            clear: clears the terminal of all command history.
            exit: exit the terminal.
            open [file_name]: The open command opens a file, just as if you had double-clicked the file's icon.`
          break
        case 'exit':
          handleExit()
          break
        default:
          response = `Unknown Command ${currentCommand}`
      }
    }
    if (directory === 'Happy-Recruiter-Computer:Calum_Portfolio/Projects$') {
      switch (currentCommand) {
        case 'ls':
          response = `Notes_App\u00A0\u00A0\u00A0\u00A0GPT_Clone\u00A0\u00A0\u00A0\u00A0Breese_Architects\u00A0\u00A0\u00A0\u00A0Plotting\u00A0\u00A0\u00A0\u00A0Python_Physics_Game\u00A0\u00A0\u00A0\u00A0Operating_System\u00A0\u00A0\u00A0\u00A0Binary_Clock\u00A0\u00A0\u00A0\u00A0Black_Jack\u00A0
 DLL_Music_Playlist\u00A0\u00A0\u00A0\u00A0Hashmap_Author`
          break
        case 'cd':
          setDirectory('Happy-Recruiter-Computer:Calum_Portfolio$')
          break
        case 'open Notes_App':
          response = (
            <TerminalProjects
              title={projects[0].title}
              img={projects[0].imageUrl}
              description={projects[0].description}
              github={projects[0].github}
              weblink={projects[0].weblink}
            />
          )
          break
        case 'open GPT_Clone':
          response = (
            <TerminalProjects
              title={projects[1].title}
              img={projects[1].imageUrl}
              description={projects[1].description}
              github={projects[1].github}
            />
          )
          break
        case 'open Breese_Architects':
          response = (
            <TerminalProjects
              title={projects[2].title}
              img={projects[2].imageUrl}
              description={projects[2].description}
            />
          )
          break
        case 'open Plotting':
          response = (
            <TerminalProjects
              title={projects[3].title}
              img={projects[3].imageUrl}
              description={projects[3].description}
              github={projects[3].github}
            />
          )
          break
        case 'open Python_Physics_Game':
          response = (
            <TerminalProjects
              title={projects[4].title}
              img={projects[4].imageUrl}
              description={projects[4].description}
              github={projects[4].github}
            />
          )
          break
        case 'open Operating_System':
          response = (
            <TerminalProjects
              title={projects[5].title}
              img={projects[5].imageUrl}
              description={projects[5].description}
              github={projects[5].github}
            />
          )
          break
        case 'open Binary_Clock':
          response = (
            <TerminalProjects
              title={projects[6].title}
              img={projects[6].imageUrl}
              description={projects[6].description}
              github={projects[6].github}
            />
          )
          break
        case 'open Black_Jack':
          response = (
            <TerminalProjects
              title={projects[7].title}
              img={projects[7].imageUrl}
              description={projects[7].description}
              github={projects[7].github}
            />
          )
          break
        case 'open DLL_Music_Playlist':
          response = (
            <TerminalProjects
              title={projects[8].title}
              img={projects[8].imageUrl}
              description={projects[8].description}
              github={projects[8].github}
            />
          )
          break
        case 'open Hashmap_Author':
          response = (
            <TerminalProjects
              title={projects[9].title}
              img={projects[9].imageUrl}
              description={projects[9].description}
              github={projects[9].github}
            />
          )
          break
        case 'clear':
          setCommandHistory([])
          setCurrentCommand('')
          setDirectory('Happy-Recruiter-Computer:Calum_Portfolio$')
          return
        case 'man':
          response = `Commands: ls, cd {directory}, man, and clear.
            ls: shows a list of items in the current directory.
            cd: followed by the name of the directory you want to enter changes the directory.
            clear: clears the terminal of all command history.
            exit: exit the terminal.
            open [file_name]: The open command opens a file, just as if you had double-clicked the file's icon.`
          break
        case 'exit':
          handleExit()
          break
        default:
          response = `Unknown Command ${currentCommand}`
      }
    }

    // Save the current command and response to the history
    setCommandHistory((prevHistory) => [
      ...prevHistory,
      { command: currentCommand, response, directory },
    ])

    // Clear the input field for the next command
    setCurrentCommand('')
  }

  useEffect(() => {
    // Scroll to the bottom when commandHistory changes
    commandLineRef.current.scrollTop = commandLineRef.current.scrollHeight
  }, [commandHistory])

  return (
    <div
      className="command-line"
      onClick={(e) => {
        inputRef.current.focus()
      }}
      ref={commandLineRef}
    >
      {commandHistory.map((entry, index) => (
        <div key={index}>
          <span className="terminal-entry">
            {entry.directory} {entry.command}
          </span>
          <br />
          <span
            className="terminal-error"
            style={{ whiteSpace: 'pre-wrap', marginLeft: '10px' }}
          >
            {entry.response}
          </span>
        </div>
      ))}

      <div className="blinking-cursor-container">
        <p className="terminal-entry">{directory}</p>
        <span className="user-input">{currentCommand}</span>
        <input
          type="text"
          style={{
            width: '10px',
            minWidth: '10px',
            caretColor: 'transparent',
            opacity: 0,
          }}
          onChange={handleInputChange}
          onKeyPress={handleEnterKeyPress}
          value={currentCommand}
          ref={inputRef}
        />
        <span className="blinking-cursor" />
      </div>
    </div>
  )
}

export default CommandLine
