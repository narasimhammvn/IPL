// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = matchDetails
  const getMatchStatus = status =>
    status === 'Won' ? 'match-won' : 'match-lost'
  const matchStatusCla = `match-status ${getMatchStatus(matchStatus)}`

  return (
    <li>
      <img src={competingTeamLogo} alt={`competing team ${competingTeam}`} />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={matchStatusCla}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
