// Write your code here
import {Component} from 'react'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamCard: []}

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(team => ({
      id: team.id,
      name: team.name,
      teamImageUrl: team.team_image_url,
    }))

    this.setState({teamCard: updatedData})
  }

  render() {
    const {teamCard} = this.state
    const {teamImageUrl, id, name} = teamCard

    return (
      <div className="home-container">
        <div className="container2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="ipl-heading">IPL Dashboard</h1>
        </div>
        <ul className="unorder">
          {teamCard.map(eachItem => (
            <TeamCard teamDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Home
