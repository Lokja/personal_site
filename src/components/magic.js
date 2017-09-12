import React, { Component } from 'react'
import decks from '../assets/data/magic.js'
import axios from 'axios'

class Magic extends Component {
  constructor() {
    super()
    this.decks = decks.data
    this.state = {
      activeDeck: this.decks[0],
      activeCard: null
    }
    this.getCardInfo = this.getCardInfo.bind(this)
    this.handleHover = this.handleHover.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.displayActiveDeckInfo = this.displayActiveDeckInfo.bind(this)
  }
  getCardInfo(slug) {
    let self = this
    axios.get(`https://api.deckbrew.com/mtg/cards/${slug}`)
    .then((response) => {
      let data = response.data
      self.setState({activeCard: data})
    })
  }
  handleHover(e) {
    let slug = e.target.attributes[0].value
    this.getCardInfo(slug)
  }
  displayActiveDeckInfo() {
    let deck = this.state.activeDeck
    return (
      <h1>{deck.commander}</h1>,
      deck.decklist.map((card, i) => {
        let slug = card.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')
        return <div key={`${deck.deckid}-${i}`} onMouseOver={this.handleHover} data={slug}>{card}</div>
      })
    )
  }
  generateCommanders() {
    return (
      this.decks.map(deck => {
        return <img alt='img not found' key={deck.deckid} value={deck.deckid} onClick={this.handleClick} src={deck.img}/>
      })
    )
  }
  handleClick(e) {
    let deckid = +e.target.getAttribute('value')
    this.setState({
      activeDeck: this.decks[deckid],
      activeCard: null
    })
  }
  render() {
    return (
      <div>
        <p>
          EDH or bust. My favorite commanders right now:
        </p>
        <div className="mtg-wrapper">
          <div className="side-bar commander">
            {this.generateCommanders()}
          </div>
          <div className="deck-info">
            <div className="deck-list">
              {this.displayActiveDeckInfo()}
            </div>
          </div>
          <div className="card-pic">
            {this.state.activeCard ? <img alt='bleh' src={this.state.activeCard.editions[0].image_url}/> : ''}
          </div>
        </div>
      </div>
    )
  }
}

export default Magic
