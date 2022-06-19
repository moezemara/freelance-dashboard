
const ProposalStats = (props) => {

    var appliedNum = props.appliedNum
    var activeNum = props.activeNum
    var archeivedNum = props.archeivedNum

return(
<div className="proposal-stats">

<h2>Proposals stats</h2>
    <p>number of applied proposals: <b>{appliedNum}</b></p>
    <p>number of active proposals: <b>{activeNum}</b></p>
    <p>number of archeived proposals: <b>{archeivedNum}</b></p>
        
</div>

);

}

export default ProposalStats