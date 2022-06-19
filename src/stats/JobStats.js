import { useState, useEffect, createRef } from "react";
import axios from "../axios.js";

const JobStats = (props) => {


return(

<div className="job-stats">
<h2>Jobs stats</h2>

    <p>Num of all jobs: <b>xx</b></p>
    <p>Num of active jobs: <b>xx</b></p>
    <p>Beginner Level: <b>xx</b></p>
    <p>intermediate Level: <b>xx</b></p>
    <p>Advanced Level: <b>xx</b></p>
    <p>Avg expected price: <b>xx</b></p>
    <p>Avg working hours: <b>xx</b></p>
    
</div>

);

}

export default JobStats