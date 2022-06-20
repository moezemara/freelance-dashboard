const JobStats = (props) => {

    var allJobs = props.stats.num_jobs
    var activeJobs = props.stats.num_active_jobs
    var entryNum = props.stats.num_entry_jobs
    var intermediateNum = props.stats.num_intermediate_jobs
    var AdvancedNum = props.stats.num_advanced_jobs
    var expectedPriceAvg = props.stats.avg_expected_price_jobs


return(

<div className="job-stats">
<h2>Jobs stats</h2>
<br /><br />

    <p>Num of all jobs: <b>{allJobs}</b></p>
    <p>Num of active jobs: <b>{activeJobs}</b></p>
    <p>Entry Level: <b>{entryNum}</b></p>
    <p>intermediate Level: <b>{intermediateNum}</b></p>
    <p>Advanced Level: <b>{AdvancedNum}</b></p>
    <p>Avg expected price: <b>{expectedPriceAvg}</b></p>
    <br /><br />
</div>

);

}

export default JobStats