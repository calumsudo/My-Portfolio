import { useEffect, useState } from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../../components/AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { Grid, Box } from '@mui/material'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [
    ' ',
    'C',
    'a',
    'l',
    'u',
    'm',
    ' ',
    'S',
    'i',
    'e',
    'm',
    'e',
    'r',
  ]
  const jobArray = [
    'S',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'E',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  const isSmallScreen = window.innerWidth <= 1425

  return (
    <Box className="home-page">
      <Grid container>
        <Grid item xs={12}>
          <div className="decorator-box">
            <div className="decorator-box2" />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="text-zone">
            {isSmallScreen ? (
              <h1 className="mobile">
                Hi, I'm Calum Siemer
                <br />
                Software Engineer.
              </h1>
            ) : (
              <h1>
                <span className={`${letterClass} _12`}>Hi,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m </span>

                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={nameArray}
                  idx={15}
                />
                <br />
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={jobArray}
                  idx={27}
                />
              </h1>
            )}
            <h2>Full Stack Web Developer</h2>
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          {isSmallScreen ? (
            <div className="stage-cube-cont"></div>
          ) : (
            <div className="stage-cube-cont">
              <div className="cubespinner">
                <div className="face1">
                  <FontAwesomeIcon icon={faPython} color="#646464" />
                </div>
                <div className="face2">
                  <FontAwesomeIcon icon={faHtml5} color="#f06529" />
                </div>
                <div className="face3">
                  <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
                </div>
                <div className="face4">
                  <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
                </div>
                <div className="face5">
                  <FontAwesomeIcon icon={faJsSquare} color="#efd91d" />
                </div>
                <div className="face6">
                  <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
                </div>
              </div>
            </div>
          )}
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home
