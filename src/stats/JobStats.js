import { useState, useEffect, createRef } from "react";
import axios from "../axios.js";

const JobStats = (props) => {

    var allJobs = props.allJobs
    var activeJobs = props.activeJobs
    var beginnerNum = props.beginnerNum
    var intermediateNum = props.intermediateNum
    var AdvancedNum = props.AdvancedNum
    var expectedPriceAvg = props.expectedPriceAvg
    var workingHoursAvg = props.workingHoursAvg


return(

<div className="job-stats">
<h2>Jobs stats</h2>

    <p>Num of all jobs: <b>{allJobs}</b></p>
    <p>Num of active jobs: <b>{activeJobs}</b></p>
    <p>Beginner Level: <b>{beginnerNum}</b></p>
    <p>intermediate Level: <b>{intermediateNum}</b></p>
    <p>Advanced Level: <b>{AdvancedNum}</b></p>
    <p>Avg expected price: <b>{expectedPriceAvg}</b></p>
    <p>Avg working hours: <b>{workingHoursAvg}</b></p>
    
</div>

);

}

export default JobStats