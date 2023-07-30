import React from 'react'
import './TechnologiesSlider.css' // Create this CSS file for styling

const TechnologiesSlider = ({ images }) => {
  return (
    <div className="technologies-slider-container">
      <div className="technologies-slider">
        {images.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Tech ${index}`} />
        ))}

        {images.map((imageUrl, index) => (
          <img
            key={`duplicate-${index}`}
            src={imageUrl}
            alt={`Tech ${index}`}
          />
        ))}
      </div>
    </div>
  )
}

export default TechnologiesSlider
