import './index.scss'
import React from 'react'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default Layout
