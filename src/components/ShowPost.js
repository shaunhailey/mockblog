import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const { id } = this.props.match.params
const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`
//
// The URL variable should be used to fetch the blog post with the _id that matches
// the endpoint.
//
// You can use this.props.history.push('/'); at the end of a fetch in your .then()
// methods to push to a particular endpoint, such as /.
