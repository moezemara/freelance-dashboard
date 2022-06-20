
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