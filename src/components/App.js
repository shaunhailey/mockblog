import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './NavBar.js'
import BaseLayout from './BaseLayout.js'

const App = () =>
  <div>
    <NavBar />
    <BaseLayout />
  </div>

export default App
