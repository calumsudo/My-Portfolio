import React, { useState, useEffect, useRef, useCallback } from 'react';
import bg from '../../background.png'

const WelcomePage = ({ handleButtonClick }) => {
  const [zoomed, setZoomed] = useState(false)
  const [shuffledText, setShuffledText] = useState('')
  const originalText = 'HI MY NAME IS CALUM'
  const [isHidden, setIsHidden] = useState(false)
  const intervalIdRef = useRef(null); // Initialize a ref to store the intervalId

  function getRandomCharacter() {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const randomIndex = Math.floor(Math.random() * characters.length)
    return characters[randomIndex]
  }

  const shuffleText = useCallback(() => {
    if (intervalIdRef.current) return // Return if a shuffle is already in progress

    let count = 0
    const shuffleCount = 2
    const shuffleInterval = 100

    intervalIdRef.current = setInterval(() => {
      const letters = originalText.split('')
      const newShuffledText = letters
        .map((char, index) => {
          if (char.match(/[a-zA-Z0-9]/)) {
            const randomCharacter = getRandomCharacter()
            const cyclesToRevert = index - Math.floor(count / shuffleCount)

            if (count >= cyclesToRevert * shuffleCount) {
              return originalText[index]
            }
            return randomCharacter
          }
          return char
        })
        .join('')

      setShuffledText(newShuffledText)

      count++
      if (count >= (shuffleCount + 1) * letters.length) {
        clearInterval(intervalIdRef.current)
        intervalIdRef.current = null // Clear the interval ID
        setShuffledText(originalText)
      }
    }, shuffleInterval)
  },[])

  function revertText() {
    clearInterval(intervalIdRef.current)
    intervalIdRef.current = null // Clear the interval ID
    setShuffledText(originalText)
  }

  const handleZoom = () => {
    setZoomed(true)
    setIsHidden(true)
    setTimeout(() => {
      handleButtonClick()
    }, 1100)
  }
  useEffect(() => {
    // Run the shuffleText function on page load
    shuffleText();

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalIdRef.current); // Access the intervalId from the ref
      intervalIdRef.current = null; // Clear the ref value
    };
  }, [shuffleText]);
  return (
    <div className="welcome-container">
      <div
        className={`welcome-image ${zoomed ? 'zoomed' : ''}`}
        style={{ backgroundImage: `url(${bg})` }}
      >
        {!isHidden && (
          <p
            className="intro"
            onMouseEnter={shuffleText}
            onMouseLeave={revertText}
          >
            {shuffledText || originalText}
          </p>
        )}
        {!isHidden && (
          <button className="click-here" onClick={handleZoom}>
            Click Here
          </button>
        )}
      </div>
    </div>
  )
}

export default WelcomePage
