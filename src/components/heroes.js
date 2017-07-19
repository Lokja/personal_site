import React, { Component } from 'react'
import axios from 'axios'
import FontAwesome from 'react-fontawesome'
import loading from '../assets/images/loading.gif'

class Heroes extends Component {
  constructor() {
    super()
    this.state = {
      rankings: [],
      dataLoaded: false
    }
    this.getHotslogsData = this.getHotslogsData.bind(this)
    this.renderData = this.renderData.bind(this)
  }
  getHotslogsData() {
    let self = this
    axios.get('https://api.hotslogs.com/Public/Players/3921393')
    .then((response) => {
      self.setState({
        rankings: response.data.LeaderboardRankings,
        dataLoaded: true
      })
    })
  }
  componentDidMount() {
    this.getHotslogsData()
  }
  renderData() {
    if (this.state.dataLoaded) {
      return this.state.rankings.map((league, i) => {
        let mmr = league.CurrentMMR
        let leagueName = league.GameMode
        return (
          <div key={i}>
            {leagueName.replace(/([A-Z])/g, ' $1')}: {mmr} {mmr >= 2500 ? <FontAwesome name='diamond' /> : ''}
          </div>
        )
      })
    } else {
      return <div className="loading">loading...</div>
    }
  }
  render() {
    return (
      <div>
        <div>
          My real time MMR data:
        </div>
        {this.renderData()}
        {this.state.dataLoaded ? <div className="loading"><img alt="loading" src={loading} /></div> : null}
      </div>
    )
  }
}

export default Heroes
