const BriefProfileCard = (props) => {
    const title = props.title;
    const id = props.id;
    const goToProfile = ()=>{
        window.location = "/profile/"+id;
    }

    return (  
        <div className="briefprofilecard">
            <div className="briefprofilecardmain">
                <p><b>{title}</b></p>
            </div>
            <div style={{marginLeft:'auto'}}>
                <button style={{marginLeft:10}} onClick={goToProfile}>View</button>
            </div>
        </div>
    );
}
 
export default BriefProfileCard;