import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './home.js'
import About from './about.js'
import Projects from './projects.js'

class Navbar extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="navbar">
            <div className="navlink"><Link to="/">Home</Link></div>
            <div className="navlink"><Link to="/about">About</Link></div>
            <div className="navlink"><Link to="/projects">Projects</Link></div>
            <div className="navlink"><a href="https://drive.google.com/file/d/0B7iazblCa9urTlJ5VUhjVWhrTXM/view?usp=sharing" target="_blank">Resume</a></div>
          </div>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
        </div>
      </Router>
    )
  }
}

export default Navbar
