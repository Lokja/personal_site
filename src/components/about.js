import React, { Component } from 'react'
import Buildapc from './buildapc.js'
import Magic from './magic.js'
import Skating from './skating.js'
import Heroes from './heroes.js'

class About extends Component {
  constructor() {
    super()
    this.state = {
      activeAbout: 'buildapc'
    }
    this.handleClick = this.handleClick.bind(this)
    this.aboutSwitch = this.aboutSwitch.bind(this)
  }
  handleClick(input) {
    this.setState({
      activeAbout: input
    })
  }
  aboutSwitch() {
    switch (this.state.activeAbout){
      case 'buildapc':
        return <Buildapc />
      case 'heroes':
        return <Heroes />
      case 'magic':
        return <Magic />
      case 'skating':
        return <Skating />
      default:
        return ''
    }
  }
  render() {
    return (
      <div className="about">
        <div className="about-text">
          <p>
            I'm a fullstack developer currently expanding my skillz.
            I'm interested in all things JS, especially React/Redux, as well as
            Ruby and Ruby on Rails.
          </p>
          <div className="about-wrapper">
            I love:
            <div className="about-bar">
              <div className="about-option" style={this.state.activeAbout === 'buildapc' ? {'color': '#ffc107'} : null} onClick={() => this.handleClick('buildapc')}>Building PC's</div>
              <div className="about-option" style={this.state.activeAbout === 'heroes' ? {'color': '#ffc107'} : null} onClick={() => this.handleClick('heroes')}>Heroes of the Storm</div>
              <div className="about-option" style={this.state.activeAbout === 'magic' ? {'color': '#ffc107'} : null} onClick={() => this.handleClick('magic')}>Magic: The Gathering</div>
              <div className="about-option" style={this.state.activeAbout === 'skating' ? {'color': '#ffc107'} : null} onClick={() => this.handleClick('skating')}>Longboarding around Brooklyn</div>
            </div>
            {this.aboutSwitch()}
          </div>
        </div>
      </div>
    )
  }
}

export default About
