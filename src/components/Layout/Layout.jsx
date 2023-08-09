import './index.scss'
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'

const Layout = () => {
  const location = useLocation()
  const isResumePage = location.pathname === '/resume'
  const isProjectsPage = location.pathname === '/projects'

  return (
    <div className="App">
      <Sidebar />
      <div className={`page ${isResumePage || isProjectsPage ? 'page2' : ''}`}>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
