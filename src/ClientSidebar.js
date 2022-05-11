import pImg from "./src-images/profile.png"
const ClientSidebar = () => {
    return ( 
        <div className="clientsidebar">
            <a href="/profilesettings"><img className="profileimg" src={pImg} style={{width:200,height:200}}/></a>
            <h2>Profile Name</h2>
            <p><b>Skills:</b> Coding, Writing...</p>
            <p><b>$35/hr</b></p>
            <p><b>Egypt</b></p>
        </div>
     );
}
 
export default ClientSidebar ;