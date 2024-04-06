// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails
  return (
    <li className="container">
      <Link to={`/team-matches/${id}`} className="container2">
        <img src={teamImageUrl} alt={name} className="image" />
        <h1 className="heading">{name}</h1>
      </Link>
    </li>
  )
}
export default TeamCard
