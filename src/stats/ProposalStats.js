import { useState, useEffect, createRef } from "react";
import axios from "../axios.js";

const ProposalStats = (props) => {

    var proposalsNum = props.proposalsNum
    var OpenedProposalNum = props.OpenedProposalNum
    var priceAvg = props.priceAvg
    var durationAvg = props.durationAvg

return(
<div className="proposal-stats">

<h2>Proposals stats</h2>
    <p>number of proposals: <b>{proposalsNum}</b></p>
    <p>number of opened proposals: <b>{OpenedProposalNum}</b></p>
    <p>Avg. expected price: <b>{priceAvg}</b></p>
    <p>Avg. expected duration: <b>{durationAvg}</b></p>
    
</div>



);

}

export default ProposalStats