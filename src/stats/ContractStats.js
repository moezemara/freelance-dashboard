
const ContractStats = (props) => {


    var inInterview = props.stats.num_interview_contracts
    var active = props.stats.num_active_contracts
    var archieved = props.stats.num_archived_contracts

return(

<div className="contract-stats">
<h2>Contracts stats</h2>
    <p>In-interview contracts:&ensp;<b>{inInterview}</b></p>
    <p>Active contracts:&ensp;<b>{active}</b></p>
    <p>Archieved contracts:&ensp;<b>{archieved}</b></p>

</div>


);

}

export default ContractStats