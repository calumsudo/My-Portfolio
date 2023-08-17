import './resume.scss'
import { useEffect, useState } from 'react'
import { Grid, Stack, Box } from '@mui/material'
import AnimatedLetters from '../../components/AnimatedLetters'
import FileDownload from '../../assets/icons/download+file+page+paper+icon-1320165844661536600.png'
import pdf from '../../assets/Resume.pdf'
import merit from '../../assets/icons/Merit.png'
import delaware from '../../assets/icons/University_of_Delaware_Seal.svg.png'
const Resume = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const downloadablePDFName = 'Calum-Siemer-Resume.pdf'

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  const isSmallScreen = window.innerWidth <= 1425

  return (
    <Box className="resume-page">
      <Grid container>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <Box className="text-zone">
                <h1>
                  <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['R', 'e', 's', 'u', 'm', 'e']}
                    idx={15}
                  />
                </h1>
                <br />
                <h2>Download a copy of my resume</h2>
                {/* <h2>or scroll down to read the basics.</h2> */}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className="pdf-downloader">
                <a href={pdf} download={downloadablePDFName}>
                  <img src={FileDownload} alt="Download Resume" />
                </a>
                <h2>Download</h2>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {isSmallScreen ? (
            <div />
          ) : (
            <div className="decorator-box">
              <div className="decorator-box2"></div>
            </div>
          )}
        </Grid>
      </Grid>
    </Box>
  )
}

export default Resume
