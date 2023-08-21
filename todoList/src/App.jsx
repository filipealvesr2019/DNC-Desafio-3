import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TaskList from './TaskList';
import './global.scss'

function App() {
  

  return (
    <Router>
    <Route path="/" exact component={TaskList} />
  </Router>

  )
}

export default App
