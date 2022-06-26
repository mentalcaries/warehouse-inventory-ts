import React from 'react'
import './Navigation.css'
import {NavLink} from 'react-router-dom'

function Navigation(){

  return(
    <nav className="nav">
      <NavLink to="/viewer" 
      className={({ isActive }) => "nav__link" + (isActive ? " nav__link_active" : "")}
      >Product Viewer</NavLink>
      <NavLink to="/inventory" className={({ isActive }) => "nav__link" + (isActive ? " nav__link_active" : "")}>Inventory Manager</NavLink>
    </nav>
  )
}

export default Navigation