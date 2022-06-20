
const ContractStats = (props) => {

    var inInterview = props.num_interview_contracts
    var active = props.num_active_contracts
    var archieved = props.num_archived_contracts

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