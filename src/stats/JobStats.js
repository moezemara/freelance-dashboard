const JobStats = (props) => {

    var allJobs = props.stats.num_jobs
    var activeJobs = props.stats.num_active_jobs
    var entryNum = props.stats.num_entry_jobs
    var intermediateNum = props.stats.num_intermediate_jobs
    var AdvancedNum = props.stats.num_advanced_jobs
    var expectedPriceAvg = props.stats.avg_expected_price_jobs

    var active_percent = activeJobs/allJobs *100
    var inactive_percent = 100 - active_percent

return(

<div className="job-stats">
<h2>Jobs stats</h2>


    <p>Num of all jobs:&ensp;<b>{allJobs}</b></p>
    <p>Num of active jobs:&ensp;<b>{activeJobs}</b></p>
    <p>percent of active jobs:&ensp;<b>{active_percent}%</b></p>
    <p>percent of In-active jobs:&ensp;<b>{inactive_percent}%</b></p>


    <p>Entry Level:&ensp;<b>{entryNum}</b></p>
    <p>intermediate Level:&ensp;<b>{intermediateNum}</b></p>
    <p>Advanced Level:&ensp;<b>{AdvancedNum}</b></p>
    <p>Avg expected price:&ensp;<b>{expectedPriceAvg}</b></p>
</div>

);

}

export default JobStats