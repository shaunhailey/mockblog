import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class CreatePost extends Component {
  state = {
    author: '',
    title: '',
    post: '',
    postArray: []

  render() {
    return (
      <div>
      <form action="post">
      <label for="author">Author</label>
       <input type="text" name="author" />
       <label for="title">Title</label>
       <input type="text" name="title" />
       <label for="post">Write your blog...</label>
       <input type="text" name="post" />
      </form>
      </div>
    )
  }
}

export default CreatePost
