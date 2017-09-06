import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CreatePost from './CreatePost.js'

const BaseLayout = () =>
  <div>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/CreatePost" component={CreatePost} />
      <Route path="/ShowPost" component={ShowPost} />
    </Switch>
  </div>

export default BaseLayout
