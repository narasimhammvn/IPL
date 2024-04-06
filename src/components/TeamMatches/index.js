// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

const teamMatchesApiUrl = 'https://apis.ccbp.in/ipl/ '

class TeamMatches extends Component {
  state = {teamDetails: {}, isloading: true}

  componentDidMount() {
    this.getTeams()
  }

  getFormattedData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getTeams = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`${teamMatchesApiUrl} ${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerURL: data.team_banner_url,
      latestMatches: this.getFormattedData(data.latest_match_details),
      recentMatches: data.recent_matches.map(eachItem =>
        this.getFormattedData(eachItem),
      ),
    }
    this.setState({teamDetails: updatedData, isloading: false})
  }

  renderRecenterMatches = () => {
    const {teamDetails} = this.state
    const {recentMatches} = teamDetails
    return (
      <ul>
        {recentMatches.map(eachMatch => (
          <MatchCard matchDetails={eachMatch} key={eachMatch.id} />
        ))}
      </ul>
    )
  }

  renderTeamMatches = () => {
    const {teamDetails} = this.state
    const {teamBannerURL, latestMatches} = teamDetails
    return (
      <div className="container">
        <img src={teamBannerURL} alt="team banner" className="image" />
        <LatestMatch latestMatchData={latestMatches} />
        {this.renderRecenterMatches()}
      </div>
    )
  }

  renderLoader = () => (
    <div className="loader">
      <loader type="Oval" color="#ffffff" height={50} />
    </div>
  )

  getRouteClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'srh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  render() {
    const {isloading} = this.state
    const className = `team-matches-container ${this.getRouteClassName()}`
    return (
      <div className={className}>
        {isloading ? this.renderLoader() : this.renderTeamMatches()}
      </div>
    )
  }
}

export default TeamMatches
