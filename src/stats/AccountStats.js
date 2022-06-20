
const AccountStats = (props) => {
    
    var userNum = props.stats.num_users
    var freelancerPercent = props.stats.freelancers_percentage
    var clientPercent = props.stats.clients_percentage
    var avgClientRating = props.stats.avg_client_rating
    var avgFreelancerRating = props.stats.avg_freelancer_rating
    var femalePercent = props.stats.female_percentage
    var malePercent = props.stats.male_percentage
    var bannedNum = props.stats.num_banned


return(

<div className="account-stats">
<h2>Accounts stats</h2>
    <p>number of users:&ensp;<b>{userNum}</b></p>
    <p>percent of freelancers:&ensp;<b>{freelancerPercent.toFixed(1)} %</b></p>
    <p>percent of clients:&ensp;<b>{clientPercent.toFixed(1)} %</b></p>
    <p>Avg. clients rating:&ensp;<b>({avgClientRating.toFixed(1)})  {"★".repeat(avgClientRating)}</b></p>
    <p>Avg. freelancers rating:&ensp;<b>({avgFreelancerRating.toFixed(1)}) {"★".repeat(avgFreelancerRating)}</b></p>
    <p>Percent of Male users:&ensp;<b>{malePercent.toFixed(1)} %</b></p>
    <p>Percent of Female users:&ensp;<b>{femalePercent.toFixed(1)} %</b></p>
    <p>Num of banned accounts:&ensp;<b>{bannedNum}</b></p>

</div>


);

}

export default AccountStats