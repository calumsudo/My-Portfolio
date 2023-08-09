import { Link, NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import './sidebar.scss'
import LogoCS from '../../logo.png'
import {
  faHome,
  faUser,
  faEnvelope,
  faGrip,
  faScroll,
  faComputer,
  faBars,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconButton } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

const Sidebar = () => {
  const [menuAnchor, setMenuAnchor] = useState(null)

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget)
  }

  const handleMenuClose = () => {
    setMenuAnchor(null)
  }
  return (


    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoCS} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#615d6c" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#615d6c" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="resume-link"
          to="/resume"
        >
          <FontAwesomeIcon icon={faScroll} color="#615d6c" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="projects-link"
          to="/projects"
        >
          <FontAwesomeIcon icon={faGrip} color="#615d6c" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="terminal-link"
          to="/terminal-simulator"
        >
          <FontAwesomeIcon icon={faComputer} color="#615d6c" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#615d6c" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/calum-siemer-9bb31a167/"
          >
            <IconButton>
              <LinkedInIcon sx={{ color: '#615d6c' }} />
            </IconButton>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/calumsudo"
          >
            <IconButton>
              <GitHubIcon sx={{ color: '#615d6c' }} />
            </IconButton>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar

