import { Link, NavLink } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import './index.scss'
import LogoCS from '../../logo.png'
import {
  faHome,
  faUser,
  faEnvelope,
  faGrip,
  faScroll,
  faComputer,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconButton } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1425)
    }

    handleResize() // Set initial value
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div>
      {isMobile ? (
        <div className="mobile-nav">
          <Button onClick={handleClick}>
            <MenuIcon sx={{ color: '#ffff' }} />
          </Button>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem onClick={handleClose}>
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/about">About Me</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/resume">Resume</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/projects">Projects</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/contact">Contact Me</Link>
            </MenuItem>
          </Menu>
        </div>
      ) : (
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
      )}
    </div>
  )
}

export default Sidebar
