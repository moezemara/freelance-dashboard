import { useState, useEffect, createRef } from "react";
import axios from "../axios.js";

const AccountStats = (props) => {

    var userNum = props.userNum
    var freelancerPercent = props.freelancerPercent
    var clientPercent = props.clientPercent
    var avgClientRating = props.avgClientRating
    var avgFreelancerRating = props.avgFreelancerRating
    var malePercent = props.malePercent
    var femalePercent = props.femalePercent
    var bannedNum = props.bannedNum


return(

<div className="account-stats">
<h2>Accounts stats</h2>
    <p>number of users: <b>{userNum}</b></p>
    <p>percent of freelancers: <b>{freelancerPercent}</b></p>
    <p>percent of clients: <b>{clientPercent}</b></p>
    <p>Avg. clients rating: <b>{avgClientRating}</b></p>
    <p>Avg. freelancers rating: <b>{avgFreelancerRating}</b></p>
    <p>Percent of Male users: <b>{malePercent}</b></p>
    <p>Percent of Female users: <b>{femalePercent}</b></p>
    <p>Num of banned accounts: <b>{bannedNum}</b></p>

</div>


);

}

export default AccountStats