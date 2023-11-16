import React, { useState, useEffect, useRef } from 'react'
import Education from '../../components/Resume/Education/Education'
import Experience from '../../components/Resume/Experience/Experience'
import ExtraCurriculars from '../../components/Resume/Extracurriculars/Extracurriculars'
import axios from 'axios'
import TerminalProjects from '../../components/TerminalProjects/T'

const CommandLine = ({ handleExit }) => {
  const [commandHistory, setCommandHistory] = useState([])
  const [projects, setProjects] = useState([])
  const [currentCommand, setCurrentCommand] = useState('')
  const [directory, setDirectory] = useState('Happy-Recruiter-Computer:Calum_Portfolio$')
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
    axios.get('https://api.github.com/users/calumsudo/repos')
      .then(response => {
        const fetchedProjects = response.data.map(repo => ({
          title: repo.name,
          // ... other project properties
        }));
        setProjects(fetchedProjects);
      })
      .catch(error => console.error('Error fetching data: ', error));

    inputRef.current.focus();
  }, []);


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
          setDirectory('Happy-Recruiter-Computer:Calum_Portfolio/Resume$')
          break
        case 'cd About_Me':
          setDirectory('Happy-Recruiter-Computer:Calum_Portfolio/About_Me$')
          break
        case 'clear':
          setCommandHistory([])
          setCurrentCommand('')
          return
        case 'man':
          response = `Commands: ls, cd {directory}, man, clear, exit, and open.
            ls: shows a list of items in the current directory.
            cd: followed by the name of the directory you want to enter changes the directory. To return to the main directory just type "cd".
            clear: clears the terminal of all command history.
            exit: exit the terminal.
            open [file_name]: The open command opens a file, just as if you had double-clicked the file's icon.
            For further explanation on how to operate the command line just type help
            `
          break
        case 'help':
          response = `
    To start, type "ls" and press Enter to see a list of directories in the home folder.
    To access a directory, type "cd" followed by the name of the directory you want to enter. For example: "cd Projects".
    To see what projects are in the directory, type "ls" to display all the projects.
    To open a project, type "open" followed by the name of the project you want to open. For example: "open Notes_App".
    If you find the command line confusing, type "exit" to exit the current session.
          `
          break
        case 'exit':
          handleExit()
          break
        default:
          response = `Unknown Command ${currentCommand}`
      }
    }
//     if (directory === 'Happy-Recruiter-Computer:Calum_Portfolio/Projects$') {
//       if (currentCommand.startsWith('open ')) {
//         const projectName = currentCommand.substring(5); // Gets the project name after 'open '
//         response = <TerminalProjects selectedProjectTitle={projectName} />;
//       }
//       switch (currentCommand) {
//         case 'ls':
//           response = `Cloud-Based-Notes-App\u00A0\u00A0\u00A0\u00A0GPT_Clone\u00A0\u00A0\u00A0\u00A0Bartender\u00A0\u00A0\u00A0\u00A0Bunker_Wire\u00A0\u00A0\u00A0\u00A0Breese_Architects\u00A0\u00A0\u00A0\u00A0Plotting\u00A0\u00A0\u00A0\u00A0Python_Physics_Game\u00A0\u00A0\u00A0\u00A0Operating_System
//  Binary_Clock\u00A0\u00A0\u00A0\u00A0Black_Jack\u00A0DLL_Music_Playlist\u00A0\u00A0\u00A0\u00A0Hashmap_Author\u00A0\u00A0\u00A0\u00A0VHDL_Calculator`
//           break
//         case 'cd':
//           setDirectory('Happy-Recruiter-Computer:Calum_Portfolio$')
//           break
//           case 'open Cloud-Based-Notes-App':
//             const project = projects.find(p => p.title === 'Cloud-Based-Notes-App');
//             if (project) {
//               response = <T {...project} />;
//             } else {
//               response = 'Project not found';
//             }
//             break;
//         case 'open GPT_Clone':
//           response = (
//             <TerminalProjects
//               title={projects[1].title}
//               img={projects[1].imageUrl}
//               description={projects[1].description}
//               github={projects[1].github}
//             />
//           )
//           break
//         case 'open Bartender':
//           response = (
//             <TerminalProjects
//               title={projects[2].title}
//               img={projects[2].imageUrl}
//               description={projects[2].description}
//             />
//           )
//           break
//         case 'open Bunker_Wire':
//           response = (
//             <TerminalProjects
//               title={projects[3].title}
//               img={projects[3].imageUrl}
//               description={projects[3].description}
//               github={projects[3].github}
//             />
//           )
//           break
//         case 'open Breese_Architects':
//           response = (
//             <TerminalProjects
//               title={projects[4].title}
//               img={projects[4].imageUrl}
//               description={projects[4].description}
//               github={projects[4].github}
//             />
//           )
//           break
//         case 'open Plotting':
//           response = (
//             <TerminalProjects
//               title={projects[5].title}
//               img={projects[5].imageUrl}
//               description={projects[5].description}
//               github={projects[5].github}
//             />
//           )
//           break
//         case 'open Python_Physics_Game':
//           response = (
//             <TerminalProjects
//               title={projects[6].title}
//               img={projects[6].imageUrl}
//               description={projects[6].description}
//               github={projects[6].github}
//             />
//           )
//           break
//         case 'open Operating_System':
//           response = (
//             <TerminalProjects
//               title={projects[7].title}
//               img={projects[7].imageUrl}
//               description={projects[7].description}
//               github={projects[7].github}
//             />
//           )
//           break
//         case 'open Binary_Clock':
//           response = (
//             <TerminalProjects
//               title={projects[8].title}
//               img={projects[8].imageUrl}
//               description={projects[8].description}
//               github={projects[8].github}
//             />
//           )
//           break
//         case 'open Black_Jack':
//           response = (
//             <TerminalProjects
//               title={projects[9].title}
//               img={projects[9].imageUrl}
//               description={projects[9].description}
//               github={projects[9].github}
//             />
//           )
//           break
//         case 'open DLL_Music_Playlist':
//           response = (
//             <TerminalProjects
//               title={projects[10].title}
//               img={projects[10].imageUrl}
//               description={projects[10].description}
//               github={projects[10].github}
//             />
//           )
//           break
//         case 'open Hashmap_Author':
//           response = (
//             <TerminalProjects
//               title={projects[11].title}
//               img={projects[11].imageUrl}
//               description={projects[11].description}
//               github={projects[11].github}
//             />
//           )
//           break
//         case 'open VHDL_Calculator':
//           response = (
//             <TerminalProjects
//               title={projects[12].title}
//               img={projects[12].imageUrl}
//               description={projects[12].description}
//               github={projects[12].github}
//             />
//           )
//           break
//         case 'clear':
//           setCommandHistory([])
//           setCurrentCommand('')
//           setDirectory('Happy-Recruiter-Computer:Calum_Portfolio$')
//           return
//         case 'man':
//           response = `Commands: ls, cd {directory}, man, clear, exit, and open.
//               ls: shows a list of items in the current directory.
//               cd: followed by the name of the directory you want to enter changes the directory. To return to the main directory just type "cd".
//               clear: clears the terminal of all command history.
//               exit: exit the terminal.
//               open [file_name]: The open command opens a file, just as if you had double-clicked the file's icon.
//               For further explanation on how to operate the command line just type help
//               `
//           break
//         case 'help':
//           response = `
//       To start, type "ls" and press Enter to see a list of directories in the home folder.
//       To access a directory, type "cd" followed by the name of the directory you want to enter. For example: "cd Projects".
//       To see what projects are in the directory, type "ls" to display all the projects.
//       To open a project, type "open" followed by the name of the project you want to open. For example: "open Notes_App".
//       If you find the command line confusing, type "exit" to exit the current session.
//             `
//           break
//         case 'exit':
//           handleExit()
//           break
//         default:
//           response = `Unknown Command ${currentCommand}`
//       }
//     }
if (directory === 'Happy-Recruiter-Computer:Calum_Portfolio/Projects$') {
  if (currentCommand.startsWith('open ')) {
    const projectName = currentCommand.substring(5); // Replaces underscores with spaces
    response = <TerminalProjects selectedProjectTitle={projectName} />;
  } else {
    switch (currentCommand) {
      case 'ls':
        // Assuming you have a way to get all project names (both private and fetched)
        // For example, you could concatenate the names from both sources
        const allProjectNames = projects.map(p => p.title.replace(/\s+/g, '_')).join('\u00A0\u00A0\u00A0');
        response = allProjectNames;
        break;
      case 'cd':
        setDirectory('Happy-Recruiter-Computer:Calum_Portfolio$');
        break;
      case 'clear':
        setCommandHistory([]);
        setCurrentCommand('');
        setDirectory('Happy-Recruiter-Computer:Calum_Portfolio$');
        return;
      case 'man':
        // man command response
        break;
      case 'help':
        // help command response
        break;
      case 'exit':
        handleExit();
        break;
      default:
        response = `Unknown Command ${currentCommand}`;
    }
  }
}
    if (directory === 'Happy-Recruiter-Computer:Calum_Portfolio/Resume$') {
      switch (currentCommand) {
        case 'ls':
          response =
            'Education\u00A0\u00A0\u00A0\u00A0Experience\u00A0\u00A0\u00A0\u00A0Extracurriculars'
          break
        case 'cd':
          setDirectory('Happy-Recruiter-Computer:Calum_Portfolio$')
          break
        case 'clear':
          setCommandHistory([])
          setCurrentCommand('')
          return
        case 'man':
          response = `Commands: ls, cd {directory}, man, clear, exit, and open.
              ls: shows a list of items in the current directory.
              cd: followed by the name of the directory you want to enter changes the directory. To return to the main directory just type "cd".
              clear: clears the terminal of all command history.
              exit: exit the terminal.
              open [file_name]: The open command opens a file, just as if you had double-clicked the file's icon.
              For further explanation on how to operate the command line just type help
              `
          break
        case 'help':
          response = `
      To start, type "ls" and press Enter to see a list of directories in the home folder.
      To access a directory, type "cd" followed by the name of the directory you want to enter. For example: "cd Projects".
      To see what projects are in the directory, type "ls" to display all the projects.
      To open a project, type "open" followed by the name of the project you want to open. For example: "open Notes_App".
      If you find the command line confusing, type "exit" to exit the current session.
            `
          break
        case 'open Education':
          response = <Education />
          break
        case 'open Experience':
          response = <Experience />
          break
        case 'open Extracurriculars':
          response = <ExtraCurriculars />
          break
        case 'exit':
          handleExit()
          break
        default:
          response = `Unknown Command ${currentCommand}`
      }
    }
    if (directory === 'Happy-Recruiter-Computer:Calum_Portfolio/About_Me$') {
      switch (currentCommand) {
        case 'ls':
          response = `I'm a passionate and driven Full Stack Web Developer with a strong fascination for the ever-evolving world of technology. As a recent
 graduate of the University of Delaware, where I earned a Bachelor of Science in Computer Engineering with minors in Computer Science and
 Cybersecurity, I've cultivated a diverse skill set that combines engineering principles with creative problem-solving. I am excited to
 embark on new collaborations, tackle ambitious projects, and contribute to the ever-expanding realm of technology.`
          break
        case 'cd':
          setDirectory('Happy-Recruiter-Computer:Calum_Portfolio$')
          break
        case 'clear':
          setCommandHistory([])
          setCurrentCommand('')
          return
        case 'man':
          response = `Commands: ls, cd {directory}, man, clear, exit, and open.
            ls: shows a list of items in the current directory.
            cd: followed by the name of the directory you want to enter changes the directory. To return to the main directory just type "cd".
            clear: clears the terminal of all command history.
            exit: exit the terminal.
            open [file_name]: The open command opens a file, just as if you had double-clicked the file's icon.
            For further explanation on how to operate the command line just type help
            `
          break
        case 'help':
          response = `
    To start, type "ls" and press Enter to see a list of directories in the home folder.
    To access a directory, type "cd" followed by the name of the directory you want to enter. For example: "cd Projects".
    To see what projects are in the directory, type "ls" to display all the projects.
    To open a project, type "open" followed by the name of the project you want to open. For example: "open Notes_App".
    If you find the command line confusing, type "exit" to exit the current session.
          `
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
