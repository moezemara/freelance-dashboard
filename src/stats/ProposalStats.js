
const ProposalStats = (props) => {

    var proposalsNum = props.proposalsNum
    var pendingProposalNum = props.pendingProposalNum
    var priceAvg = props.priceAvg
    var durationAvg = props.durationAvg

return(
<div className="proposal-stats">

<h2>Proposals stats</h2>
    <p>number of proposals: <b>{proposalsNum}</b></p>
    <p>number of pending proposals: <b>{pendingProposalNum}</b></p>
    <p>Avg. expected price: <b>{priceAvg}</b></p>
    <p>Avg. expected duration: <b>{durationAvg}</b></p>
    
</div>



);

}

export default ProposalStats