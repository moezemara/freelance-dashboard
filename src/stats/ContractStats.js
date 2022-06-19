
const ContractStats = (props) => {

    var inInterview = props.inInterview
    var active = props.active
    var archieved = props.archieved
    var finalPrice = props.finalPrice

return(

<div className="contract-stats">
<h2>Contracts stats</h2>
    <p>In-interview contracts: <b>{inInterview}</b></p>
    <p>Active contracts: <b>{active}</b></p>
    <p>Archieved contracts: <b>{archieved}</b></p>
    <p>Avg. Final price: <b>{finalPrice}</b></p>

</div>


);

}

export default ContractStats