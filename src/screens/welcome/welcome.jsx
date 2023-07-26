import { useState } from 'react';

const WelcomePage = ({handleButtonClick}) => {
  const [zoomed, setZoomed] = useState(false);
  const [shuffledText, setShuffledText] = useState('');
  const originalText = "HI MY NAME IS CALUM";
  const [isHidden, setIsHidden] = useState(false);
  let intervalId = null;

  function getRandomCharacter() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  }

  function shuffleText() {
    if (intervalId) return; // Return if a shuffle is already in progress

    let count = 0;
    const shuffleCount = 2;
    const shuffleInterval = 100;

    intervalId = setInterval(() => {
      const letters = originalText.split('');
      const newShuffledText = letters
        .map((char, index) => {
          if (char.match(/[a-zA-Z0-9]/)) {
            const randomCharacter = getRandomCharacter();
            const cyclesToRevert = index - Math.floor(count / shuffleCount);

            if (count >= cyclesToRevert * shuffleCount) {
              return originalText[index];
            }
            return randomCharacter;
          }
          return char;
        })
        .join('');

      setShuffledText(newShuffledText);

      count++;
      if (count >= (shuffleCount + 1) * letters.length) {
        clearInterval(intervalId);
        intervalId = null; // Clear the interval ID
        setShuffledText(originalText);
      }
    }, shuffleInterval);
  }

  function revertText() {
    clearInterval(intervalId);
    intervalId = null; // Clear the interval ID
    setShuffledText(originalText);
  }

  const handleZoom = () => {
    setZoomed(true);
    setIsHidden(true);
    setTimeout(() => {
        handleButtonClick();
    }, 5000);
  }

  return (
    <div>
      <div className={`background ${zoomed ? 'zoomed' : ''}`}>
        {!isHidden && (
          <p className="intro" onMouseEnter={shuffleText} onMouseLeave={revertText}>
            {shuffledText || originalText}
          </p>
        )}
        {!isHidden && (
          <button className="click-here" onClick={handleZoom}>Click Here</button>
        )}
      </div>
    </div>
  );
};

export default WelcomePage;
