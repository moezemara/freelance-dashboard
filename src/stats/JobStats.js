const JobStats = (props) => {

    var allJobs = props.num_jobs
    var activeJobs = props.num_active_jobs
    var entryNum = props.num_entry_jobs
    var intermediateNum = props.num_intermediate_jobs
    var AdvancedNum = props.num_advanced_jobs
    var expectedPriceAvg = props.avg_expected_price_jobs


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