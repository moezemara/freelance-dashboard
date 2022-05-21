import locationLogo from './src-images/location.jpg'



const ClientProfileCard = (props) => {

    var profileTitle = props.profileTitle;    
    var profileName = props.profileName;
    var country = props.country;
    var profilePictureLink = props.profilePictureLink;
    var description = props.description
    var totalSpent = props.totalSpent;
    var rating = props.rating;



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
                        <p>{country}</p>
                    </td>
                </tr>
            </td>
            
            <p><b>Rating:</b> {rating}$</p> 
            <p><b>Total Spend:</b> {totalSpent}$</p> 
            
        </div>
    );
}
 
export default ClientProfileCard;