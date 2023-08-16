import { useEffect, useState } from 'react'
import AnimatedLetters from '../../components/AnimatedLetters'
import './about.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  const isSmallScreen = window.innerWidth <= 1425

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <br />
        <p>
          I'm a passionate and driven Full Stack Web Developer with a strong
          fascination for the ever-evolving world of technology. As a recent
          graduate of the University of Delaware, where I earned a Bachelor of
          Science in Computer Engineering with minors in Computer Science and
          Cybersecurity, I've cultivated a diverse skill set that combines
          engineering principles with creative problem-solving.I am excited to
          embark on new collaborations, tackle ambitious projects, and
          contribute to the ever-expanding realm of technology.
        </p>
      </div>

      {isSmallScreen ? (
        <div />
      ) : (
        <div className="decorator-box">
          <div className="decorator-box2"></div>
        </div>
      )}
    </div>
  )
}

export default About
