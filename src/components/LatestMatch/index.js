// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = latestMatchData
  return (
    <div className="container">
      <h1>Latest Matches</h1>
      <div>
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
        <div>
          <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
        </div>
        <hr />
        <div>
          <p>First Innings</p>
          <p>{firstInnings}</p>
          <p>Second Innings</p>
          <p>{secondInnings}</p>
          <p>Man Of The Match</p>
          <p>{manOfTheMatch}</p>
          <p>umpires</p>
          <p>{umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
