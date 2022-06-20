
const ProposalStats = (props) => {

    var appliedNum = props.stats.num_proposals
    var activeNum = props.stats.num_active_proposals
    var archeivedNum = props.stats.num_archived_proposals

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