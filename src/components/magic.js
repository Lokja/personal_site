import React, { Component } from 'react'
import sisay from '../assets/images/sisay.jpg'
import breya from '../assets/images/breya.jpg'
import intet from '../assets/images/intet.jpg'
import brago from '../assets/images/brago.jpg'

class Magic extends Component {
  render() {
    return (
      <div>
        <p>
          EDH or bust. My favorite commanders right now:
        </p>
        <div className="img-box">
          <img alt='img not found' src={sisay}/>
          <img alt='img not found' src={breya}/>
          <img alt='img not found' src={intet}/>
          <img alt='img not found' src={brago}/>
        </div>
      </div>
    )
  }
}

export default Magic
