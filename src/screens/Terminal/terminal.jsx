import { useState, useEffect, useRef } from 'react'

const Terminal = ({ handleClear }) => {
  const [inputValue, setInputValue] = useState('')
  const [inputSubmit, setInputSubmit] = useState('')
  const inputRef = useRef(null)

  const handleInput = (event) => {
    setInputValue(event.target.value)
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log(inputValue)
      if (inputValue !== 'clear') {
        setInputSubmit('Error: You need to Type the word clear to begin')
      } else {
        setInputSubmit('')
        handleClear()
      }
    }
  }

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <div className="terminal">
      <section className="terminal-explain">
        <h1>Welcome to my Portfolio</h1>
        <p className="terminal-description">
          This page will act as the terminal to navigate my app. If using the
          command line scares you then I have conveniently added a menu bar to
          the left. READ CAREFULLY: You must type the word clear to move into
          the command line. If you do not know how to use a command line then
          the following information is very important. After typing "clear" when
          you get into the next page you can type the word "man" which is short
          for manual. This will list all of the commands available to you!
        </p>
        <br />
        <br />
        <p className="terminal-entry">Type the word clear to begin.</p>
        <div className="blinking-cursor-container">
          <p className="terminal-entry">
            Happy-Recruiter-Computer:Calum_Portfolio$
          </p>
          <span className="user-input">{inputValue}</span>
          <input
            type="text"
            style={{
              width: '10px',
              minWidth: '10px',
              caretColor: 'transparent',
              opacity: 0,
            }}
            onChange={handleInput}
            onKeyPress={handleKeyPress}
            ref={inputRef}
          />
          <span className="blinking-cursor" />
        </div>
        {inputSubmit === 'Error: You need to Type the word clear to begin' && (
          <p className="terminal-error">{inputSubmit}</p>
        )}
      </section>
    </div>
  )
}

export default Terminal
