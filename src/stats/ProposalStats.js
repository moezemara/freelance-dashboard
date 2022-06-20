
const ProposalStats = (props) => {

    var appliedNum = props.num_proposals
    var activeNum = props.num_active_proposals
    var archeivedNum = props.num_archived_proposals

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