
const ProposalStats = (props) => {

///////////////////testing
props = { stats:{
    "avg_client_rating": 0,
    "avg_expected_price_jobs": 1100,
    "avg_freelancer_rating": 0,
    "clients_percentage": 25,
    "female_percentage": 24,
    "freelancers_percentage": 75,
    "male_percentage": 0,
    "num_active_contracts": 2,
    "num_active_jobs": 8,
    "num_active_proposals": null,
    "num_advanced_jobs": 3,
    "num_archived_contracts": 4,
    "num_archived_proposals": 13,
    "num_banned": 0,
    "num_entry_jobs": 1,
    "num_intermediate_jobs": 4,
    "num_interview_contracts": null,
    "num_jobs": 8,
    "num_proposals": 13,
    "num_users": 32}
}


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