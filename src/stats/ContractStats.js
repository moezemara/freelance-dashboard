
const ContractStats = (props) => {


    var inInterview = props.stats.num_interview_contracts
    var active = props.stats.num_active_contracts
    var archieved = props.stats.num_archived_contracts

return(

<div className="contract-stats">
<h2>Contracts stats</h2>
    <p>In-interview contracts: <b>{inInterview}</b></p>
    <p>Active contracts: <b>{active}</b></p>
    <p>Archieved contracts: <b>{archieved}</b></p>

</div>


);

}

export default ContractStats