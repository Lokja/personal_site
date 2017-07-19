import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import { Redirect } from 'react-router-dom'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      userInputs: [],
      redirect: false,
      output: ["type 'help' to get started"]
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderOutput = this.renderOutput.bind(this)
    this.defaultSubmit = this.defaultSubmit.bind(this)
  }
  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }
  defaultSubmit() {
    this.setState({
      input: '',
      output: [...this.state.output, this.state.input],
      userInputs: [...this.state.userInputs, this.state.input]
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    let inputArr = this.state.input.split(' ')
    let firstWord = inputArr[0]
    let secondWord = inputArr[1]
    switch (firstWord) {
      case 'cd':
        if (inputArr.length === 2 && (secondWord === 'about' || secondWord === 'projects')) {
          this.setState({redirect: true})
        } else {
          this.defaultSubmit()
        }
        break
      case 'help':
        let arr = ['help', "type 'help' to see this list", "type 'cd [navigationLink]' to navigate", "type 'open [projectName OR resume]' to open a new tab", "valid projectName: pokemania, flight-path, persnickity, mypc"]
        this.setState({
          input: '',
          output: [...this.state.output, ...arr],
          userInputs: [...this.state.userInputs, this.state.input]
        })
        break
      case 'open':
        let url
        switch (secondWord) {
          case 'resume':
            url = "https://drive.google.com/file/d/0B7iazblCa9urTlJ5VUhjVWhrTXM/view?usp=sharing"
            break
          case 'pokemania':
            url = "http://pokemania.surge.sh"
            break
          case 'flight-path':
            url = "http://flight-path.surge.sh"
            break
          case 'persnickity':
            url = "https://radiant-meadow-37944.herokuapp.com/"
            break
          case 'mypc':
            url = "https://pcpartpicker.com/list/YtgT7h"
            break
          default:
            url = null
        }
        this.openInNewTab(url)
        this.defaultSubmit()
        break
      default:
        this.defaultSubmit()
    }
  }
  openInNewTab(url) {
    if (url) {
      var win = window.open(url, '_blank');
      win.focus();
    }
  }
  renderOutput() {
    return this.state.output.map((str, i) => {
      return <div key={i}><FontAwesome name='angle-right' /> {str.replace(/</g, "stop it.").replace(/>/g, "really.")}</div>
    })
  }
  render() {
    return (
      <div className="my-home">
        <div className="home-title">
          {this.renderOutput()}
          <form onSubmit={this.handleSubmit}>
            <span className="blink">
              <FontAwesome name='terminal' /> {' '}
            </span>
            <input onChange={this.handleChange} value={this.state.input} type="text" autoFocus/>
            <input type="submit" style={{border:0, padding:0, fontSize:0}}/>
          </form>
        </div>
        {this.state.input === 'cd about' && this.state.redirect ? <Redirect to="/about"/> : null}
        {this.state.input === 'cd projects' && this.state.redirect ? <Redirect to="/projects"/> : null}
      </div>
    )
  }
}

export default Home
