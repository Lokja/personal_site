import React, { Component } from 'react'
import Draggable from 'react-draggable';
import PartInfo from './partinfo.js'

class Buildapc extends Component {
  constructor() {
    super()
    this.state = {
      motherboard: false,
      cooler: false,
      ram: false,
      gpu: false,
      cpu: false,
      psu: false,
      ssd1: false,
      ssd2: false,
      hdd: false,
      activePart: 'case'
    }
    this.handleMouseover = this.handleMouseover.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleDrop = this.handleDrop.bind(this)
  }
  handleMouseover(e) {
    let part = e.target.className.split('-drag')[0]
    let ele = document.getElementsByClassName(part)[0]
    this.setState({
      activePart: part
    })
    ele.style.border = 'solid red 1px'
  }
  handleMouseLeave(e) {
    let part = e.target.className.split('-drag')[0]
    let ele = document.getElementsByClassName(part)[0]
    ele.style.border = ''
  }
  handleDrop(e) {
    let currentTarget = e.target
    let currentCoords = currentTarget.getBoundingClientRect()
    let partName = e.target.className.split('-drag')[0]
    let color = document.getElementsByTagName('style')[0].innerText.split(partName + '-drag')[1].split('background-color')[1].split(': ')[1].split(';')[0]
    let fixedTarget = document.getElementsByClassName(partName)[0]
    let targetCoords = fixedTarget.getBoundingClientRect()
    if (Math.abs(currentCoords.top - targetCoords.top) < 10 && Math.abs(currentCoords.left - targetCoords.left) < 10) {
      currentTarget.style["background-color"] = 'transparent'
      currentTarget.style["z-index"] = -1
      fixedTarget.style["background-color"] = color
      this.setState({
        [partName]: true
      })
    }
    if (Object.values(this.state).every(x => !!x)) {
      this.setState({
        completed: true
      })
    }
  }
  generatePegs() {
    let self = this
    var keys = Object.keys(self.state)
    return keys.map(function(part, i) {
      return (
        <Draggable key={part+'-drag'+i} onStop={self.handleDrop}>
          <div
            className={part+'-drag'}
            onMouseOver={self.handleMouseover}
            onMouseLeave={self.handleMouseLeave}
          />
        </Draggable>
      )
    })
  }
  generateHoles() {
    let self = this
    var keys = Object.keys(self.state)
    return keys.map(function(part, i) {
      return (
        <div
          key={part+i}
          className={part}
          onMouseOver={self.state.completed ? self.handleMouseover : null}
          onMouseLeave={self.state.completed ? self.handleMouseLeave : null}
        />
      )
    })
  }
  render() {
    let winner = this.state.completed ? 'YOU WON' : 'Drag and Drop Parts to Build the PC'

    return (
      <div className="buildapc">
        <p>
          Building PC's is what first got me into coding. I love the power and
          customization of a well built machine, and wanted that level of
          control designing software as well.
        </p>
        <h2>{winner}</h2>
        <p>
          <a href="https://pcpartpicker.com/list/YtgT7h" target="_blank">Click for a PC PartPicker list of my specs.</a>
        </p>
        <div className="sim-wrapper">
          <div className="pc-sim">
            {this.generatePegs()}
            <div className="case" onMouseOver={this.state.completed ? this.handleMouseover : null}  onMouseLeave={this.state.completed ? this.handleMouseLeave : null}>
              {this.generateHoles()}
            </div>
          </div>
          <PartInfo activePart={this.state.activePart}/>
        </div>
      </div>
    )
  }
}

export default Buildapc
