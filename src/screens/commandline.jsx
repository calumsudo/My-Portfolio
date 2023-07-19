import React, { useState, useEffect, useRef } from 'react';

const CommandLine = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputSubmit, setInputSubmit] = useState('');
  const [output, setOutput] = useState([]);
  const inputRef = useRef(null);

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log(inputValue);
      const currentInputValue = inputValue; // Capture the current input value
  
      if (inputValue === 'ls') {
        setInputSubmit('Projects Resume About_Me Game');
      } 
      else {
        setInputSubmit(`Unknown command ${inputValue}`);
      }
  
      setOutput((prevOutput) => [
        ...prevOutput,
        { input: 'Happy-Recruiter-Computer:Calum_Portfolio$ ' + currentInputValue, output: inputSubmit },
      ]);
      setInputValue('');
    }
  };
  

  useEffect(() => {
    // Focus on the input element when the component mounts
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    // Process the inputSubmit when it changes
    if (inputSubmit) {
      setOutput((prevOutput) => [
        ...prevOutput,
        { input: 'Happy-Recruiter-Computer:Calum_Portfolio$ ' + inputValue, output: inputSubmit },
      ]);
    }
  }, [inputSubmit]);

  return (
    <div className="command-line">
      <section className="terminal-explain">
        <div style={{ whiteSpace: 'pre-wrap' }}>
          {output.map((item, index) => (
            <React.Fragment key={index}>
              <p className="terminal-entry">{item.input}</p>
              {(item.output === "Projects Resume About_Me Game" && <p className="terminal-examples">{item.output}</p>) || 
              (item.output && <p className="terminal-error">{item.output}</p>)}
            </React.Fragment>
          ))}
        </div>

        {/* The following block displays the input prompt for the current input */}
        <div className="blinking-cursor-container">
          <p className="terminal-entry">Happy-Recruiter-Computer:Calum_Portfolio$</p>
          <span className="user-input">{inputValue}</span>
          <input
            type="text"
            style={{ width: '10px', minWidth: '10px', caretColor: 'transparent', opacity: 0 }}
            onChange={handleInput}
            onKeyPress={handleKeyPress}
            value={inputValue}
            ref={inputRef}
          />
          <span className="blinking-cursor" />
        </div>
      </section>
    </div>
  );
};

export default CommandLine;
