import locationLogo from '../src-images/location.jpg'



const ProfileCard = (props) => {

var profileTitle = props.profileTitle;    
var profileName = props.profileName;
var country = props.country;
var profilePictureLink = props.profilePictureLink;
var skills = props.skills;
var payRate = props.payRate;
var rating = props.rating;
var description = props.description

if(!profilePictureLink){
    profilePictureLink = 'https://i.ibb.co/YNk40qC/668-6689202-avatar-profile-hd-png-download.png'
}

const convertSkillsToButtons = (skillsList)=>{
    return (  
        skillsList.map((skill)=>(<button className="attachments-buttons">{skill}</button>))
 );
}

    return (  
        <div className="profilecard">
            <h1>{profileTitle}</h1>


<td>
<img id="profile-picture" src={profilePictureLink} alt={profileName +" img"} />


</td>

<td>

    <tr><h2>{profileName}</h2></tr>
    <tr>
        <td>
        <img src={locationLogo} alt="" height="40" />
        <p>{country}</p></td>
        </tr>
</td>


<h3>pay rate {payRate}</h3>
<h3>Rating {rating}</h3>

<h3>Description </h3> 
<p className='big-paragraphs'>{description}</p>

<h3>skills: {convertSkillsToButtons(skills)} </h3> 
<p></p>




        </div>
    );
}
 
export default ProfileCard;