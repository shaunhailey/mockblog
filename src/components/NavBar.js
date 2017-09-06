import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'

const Navbar = () =>
  <div className="Navi1">
    <nav className="Navi">
      <NavLink activeClassName="selected" className="nav-link" exact to="/">
        Home
      </NavLink>
      <NavLink activeClassName="selected" className="nav-link" exact to="/CreatePost">
        CreatePost
      </NavLink>
      <NavLink activeClassName="selected" className="nav-link" exact to="/ShowPost">
        ShowPost
      </NavLink>
    </nav>
  </div>

export default Navbar
