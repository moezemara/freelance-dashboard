import axios from "axios";

const ClientNavbar = (props) => {

    const profile_id = props.profile_id;


    async function handleLogout(){
        console.log(process.env.BASE_API_URL)
        const response = await axios.post('user/logout').then((res)=>{window.location = '/';});
        console.log(response);
    }

    return ( 
        <nav className="navbar">
        <a href="/profile"><h2>Freelanco</h2></a>
        <a href="/postjob">Post a Job</a>
        <div className="links">
            <a href={`/profilesettings/${profile_id}`}>Settings</a>
            <a onClick={handleLogout}>Log Out</a>
        </div>
    </nav>
     );
}
 
export default ClientNavbar;