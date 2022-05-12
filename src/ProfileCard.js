import locationLogo from './src-images/location.jpg'
const ProfileCard = (props) => {

var profileName = props.profileName;
var country = props.country;
var profilePictureLink = props.profilePictureLink;

    return (  
        <div className="profilecard">
            <h1>Profile view</h1>


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



<h3>skills</h3>
<button>yy</button>
<button>xx</button>


        </div>
    );
}
 
export default ProfileCard;