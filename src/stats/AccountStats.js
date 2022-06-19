import { useState, useEffect, createRef } from "react";
import axios from "../axios.js";

const AccountStats = (props) => {

    

return(

<div className="accounts-stats">
<h2>Accounts stats</h2>
    <p>number of users: <b>xx</b></p>
    <p>percent of freelancers: <b>xx</b></p>
    <p>percent of clients: <b>xx</b></p>
    <p>Avg. clients rating: <b>xx</b></p>
    <p>Avg. freelancers rating: <b>xx</b></p>
    <p>Percent of Male users: <b>xx</b></p>
    <p>Percent of Female users: <b>xx</b></p>
    <p>Num of banned accounts: <b>xx</b></p>

</div>


);

}

export default AccountStats