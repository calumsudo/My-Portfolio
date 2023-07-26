import {useState, useEffect, useRef} from 'react';
import BasicMenu from '../components/menu';
import ProjectsScreen from './welcome/projectScreen';
const Terminal = ({handleClear, handlePageChange}) => {
    const [inputValue, setInputValue] = useState('');
    const [inputSubmit, setInputSubmit] = useState('');
    const [menuClicked, setMenuClicked] = useState(false);
    const inputRef = useRef(null);

    const handleInput = (event) => {
      setInputValue(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          console.log(inputValue);
          if(inputValue !== "clear"){
            setInputSubmit("Error: You need to Type the word clear to begin");
          }
          else{
            setInputSubmit("");
            handleClear();
          }
        }
      };
    
      const handlePage = (page) => {
        handlePageChange(page);
      }

      const handleMenuClicked = (menuClicked) =>{
        setMenuClicked(menuClicked);
      }

      useEffect(() => {
        // Focus the input on initial render and whenever menuClicked changes
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, [menuClicked]);

    return (
      <div>
        <div>
         <BasicMenu handlePage={handlePage} handleMenuClicked={handleMenuClicked}/>
        </div>
      <div className="terminal">
        <section className="terminal-explain">
          <h1>Welcome to my Portfolio</h1>
          <p className="terminal-description">
            This page will act as the terminal to navigate my app. If using the command line scares you then I have
            conveniently added a menu bar in the top left corner. If you are unfamiliar with using the command line
            here are the basics.
          </p>
          <p className="terminal-commands">
            To list the directories or in this case pages of my portfolio type the command: ls To open a directory or
            page of the portfolio type the command: cd followed by the name of the directory. Here are a few examples of
            what that would look like
          </p>
          <br />
          <p className="terminal-entry">Happy-Recruiter-Computer:Calum_Portfolio$ ls</p>
          <p className="terminal-examples">Projects Resume About_Me A_Game</p>
          <p className="terminal-entry">Happy-Recruiter-Computer:Calum_Portfolio$ cd Projects</p>
          <p className="terminal-entry">Type the word clear to begin.</p>
          <div className="blinking-cursor-container">
            <p className="terminal-entry">Happy-Recruiter-Computer:Calum_Portfolio$</p>
            <span className="user-input">{inputValue}</span>
            <input
            type="text"
            style={{ width: '10px', minWidth: '10px', caretColor: 'transparent', opacity: 0 }}
            onChange={handleInput}
            onKeyPress={handleKeyPress}
            ref={inputRef}
          />
            <span className="blinking-cursor" />
          </div>
          {inputSubmit==="Error: You need to Type the word clear to begin" && <p className="terminal-entry">{inputSubmit}</p>}
        </section>
      </div>
      </div>

    );
  };
  
  export default Terminal;
  