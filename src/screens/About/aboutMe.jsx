import { useEffect, useState } from 'react'
import './aboutMe.scss'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../../components/AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
const AboutMe = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [' ','c', 'a', 'l', 'u', 'm', ' ', 's', 'i', 'e', 'm', 'e', 'r']
  const jobArray = ['s','o','f','t','w','a','r','e',' ', 'e','n','g','i','n','e','e','r','.']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  },[])
  
  return (
    <div style={{backgroundColor:"#6f9ab7"}}>
    <div className="container intro-page">
    <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m </span>

        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
        <br />
        <AnimatedLetters letterClass={letterClass} 
        strArray={jobArray}
        idx={27}
        />
        </h1>
        <h2>Full Stack Web Developer</h2>
        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
    </div>
</div>

  <div className="stage-cube-cont">
    <div className='cubespinner'>
      <div className='face1'>
        <FontAwesomeIcon icon={faPython} color='#ffde57'/>
      </div>
      <div className='face2'>
        <FontAwesomeIcon icon={faHtml5} color='#f06529'/>
      </div>
      <div className='face3'>
        <FontAwesomeIcon icon={faCss3} color='#28a4d9'/>
      </div>
      <div className='face4'>
        <FontAwesomeIcon icon={faReact} color='#5ed4f4'/>
      </div>
      <div className='face5'>
        <FontAwesomeIcon icon={faJsSquare} color='#efd91d'/>
      </div>
      <div className='face6'>
        <FontAwesomeIcon icon={faGitAlt} color='#ec4d28'/>
      </div>
    </div>
  </div>
</div>
  )
}

export default AboutMe
